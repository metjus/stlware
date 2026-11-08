/** Filament colour library (approximate colours of common Bambu Lab PLA filaments). */
export interface Filament {
  name: string;
  hex: string;
}

export interface FilamentLine {
  line: string;
  colours: Filament[];
}

export const FILAMENTS: FilamentLine[] = [
  {
    line: 'Bambu PLA Basic',
    colours: [
      { name: 'Jade White', hex: '#FFFFFF' },
      { name: 'Beige', hex: '#F7E6DE' },
      { name: 'Light Gray', hex: '#D1D3D5' },
      { name: 'Silver', hex: '#A6A9AA' },
      { name: 'Gray', hex: '#8E9089' },
      { name: 'Dark Gray', hex: '#545454' },
      { name: 'Black', hex: '#000000' },
      { name: 'Red', hex: '#C12E1F' },
      { name: 'Maroon Red', hex: '#9D2235' },
      { name: 'Magenta', hex: '#EC008C' },
      { name: 'Pink', hex: '#F55A74' },
      { name: 'Hot Pink', hex: '#F5547C' },
      { name: 'Orange', hex: '#FF6A13' },
      { name: 'Pumpkin Orange', hex: '#FF9016' },
      { name: 'Yellow', hex: '#F4EE2A' },
      { name: 'Sunflower Yellow', hex: '#FEC600' },
      { name: 'Gold', hex: '#E4BD68' },
      { name: 'Bright Green', hex: '#BECF00' },
      { name: 'Bambu Green', hex: '#00AE42' },
      { name: 'Mistletoe Green', hex: '#3F8E43' },
      { name: 'Turquoise', hex: '#00B1B7' },
      { name: 'Cyan', hex: '#0086D6' },
      { name: 'Cobalt Blue', hex: '#0056B8' },
      { name: 'Blue', hex: '#0A2989' },
      { name: 'Blue Grey', hex: '#5B6579' },
      { name: 'Purple', hex: '#5E43B7' },
      { name: 'Indigo Purple', hex: '#482960' },
      { name: 'Brown', hex: '#9D432C' },
      { name: 'Cocoa Brown', hex: '#6F5034' },
    ],
  },
  {
    line: 'Bambu PLA Matte',
    colours: [
      { name: 'Ivory White', hex: '#FFFFFF' },
      { name: 'Bone White', hex: '#CBC6B8' },
      { name: 'Desert Tan', hex: '#E8DBB7' },
      { name: 'Latte Brown', hex: '#D3B7A7' },
      { name: 'Caramel', hex: '#AE835B' },
      { name: 'Terracotta', hex: '#B15533' },
      { name: 'Dark Brown', hex: '#7D6556' },
      { name: 'Dark Chocolate', hex: '#4D3324' },
      { name: 'Ash Gray', hex: '#9B9EA0' },
      { name: 'Charcoal', hex: '#000000' },
      { name: 'Scarlet Red', hex: '#DE4343' },
      { name: 'Dark Red', hex: '#BB3D43' },
      { name: 'Mandarin Orange', hex: '#F99963' },
      { name: 'Lemon Yellow', hex: '#F7D959' },
      { name: 'Sakura Pink', hex: '#E8AFCF' },
      { name: 'Lilac Purple', hex: '#AE96D4' },
      { name: 'Ice Blue', hex: '#A3D8E1' },
      { name: 'Sky Blue', hex: '#56B7E6' },
      { name: 'Marine Blue', hex: '#0078BF' },
      { name: 'Dark Blue', hex: '#042F56' },
      { name: 'Grass Green', hex: '#61C680' },
      { name: 'Apple Green', hex: '#C2E189' },
      { name: 'Dark Green', hex: '#68724D' },
    ],
  },
];
