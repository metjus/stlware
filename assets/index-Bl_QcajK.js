import{r as e,t}from"./handoff-vnYGP8qh.js";var n=e=>document.getElementById(e),r=n(`drop`),i=n(`fileInput`);async function a(e){let r=Array.from(e??[]).filter(e=>/\.(stl|3mf|obj|mtl)$/i.test(e.name));if(!r.some(e=>/\.(stl|3mf|obj)$/i.test(e.name)))n(`dropBig`).textContent=`That is not an STL, 3MF or OBJ file`;else{n(`dropBig`).textContent=`Opening the editor…`;try{await t(r),location.href=`editor?open=drop`}catch{location.href=`editor`}}}[`dragenter`,`dragover`].forEach(e=>r.addEventListener(e,e=>{e.preventDefault(),r.classList.add(`over`)})),[`dragleave`,`drop`].forEach(e=>r.addEventListener(e,e=>{e.preventDefault(),r.classList.remove(`over`)})),r.addEventListener(`drop`,e=>a(e.dataTransfer?.files)),r.addEventListener(`click`,()=>i.click()),r.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i.click())}),i.addEventListener(`change`,()=>{a(i.files),i.value=``}),window.addEventListener(`dragover`,e=>e.preventDefault()),window.addEventListener(`drop`,e=>{r.contains(e.target)||e.preventDefault()});var o=0;function s(){let e=n(`counter`);e.hidden=o<500,e.hidden||(e.innerHTML=`<b>${o.toLocaleString(`en-US`)}</b> models exported with STLware`)}fetch(`/api/count.php`,{cache:`no-store`}).then(e=>e.ok?e.json():null).then(e=>{o=Number(e?.exports)||0,s()}).catch(()=>{});{let t=`mailto:${e}?subject=Desktop%20version&body=Let%20me%20know%20when%20the%20STLware%20desktop%20app%20is%20out.`;n(`desktopSlot`).outerHTML=`
  <section id="desktop" class="desktop-sec">
    <div class="wrap">
      <div class="desktop">
        <div class="txt">
          <p class="label desk-label"><span class="live" aria-hidden="true"></span>In the works</p>
          <h2 class="h2">STLware is coming to the desktop.</h2>
          <p class="lede">We are building a desktop version: the same painting and cutting tools, as an app you install once and open next to your slicer. Want to know the day it lands? Send us a line and we will write once, when it is ready.</p>
        </div>
        <a class="btn solid" href="${t}">Notify me<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </section>`}n(`version`).textContent=`v0.5.15`,s();