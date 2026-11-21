/**
 * Hands a model dropped on the landing page over to the editor.
 * The landing page stores the File objects in IndexedDB and opens /editor?open=drop;
 * the editor takes them out (and deletes them) on start. Everything stays in this browser.
 */
const DB = 'stlware-handoff';
const STORE = 'files';
const KEY = 'pending';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE, mode);
        const req = fn(tx.objectStore(STORE));
        tx.oncomplete = () => { db.close(); resolve(req.result); };
        tx.onerror = () => { db.close(); reject(tx.error); };
      }),
  );
}

/** Landing page: keep the files for the editor. */
export function putHandoff(files: File[]): Promise<unknown> {
  return run('readwrite', (s) => s.put(files, KEY));
}

/** Editor: take the files (once) or get null. */
export async function takeHandoff(): Promise<File[] | null> {
  try {
    const files = await run<File[] | undefined>('readonly', (s) => s.get(KEY));
    await run('readwrite', (s) => s.delete(KEY));
    return files?.length ? files : null;
  } catch {
    return null;
  }
}
