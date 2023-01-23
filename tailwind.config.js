const { CLIENT_PROTOCOL_41 } = require('mysql/lib/protocol/constants/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '2.5': '30px',
        '11': '2.25rem',
        '128': '32rem',
        '100': '24rem',
        '200':'950px',
        'card':'690px',
        '18':'4.5rem',
        '54':'13.5rem',
      }
,
padding: {
  '2.5': '10px',
  '1.5': '6px',
},
minHeight: {
  '1/2': '50%',
},
spacing: {
  'v':'20vh',
},
animation: {
  'slid': 'slider 5s linear infinite',
},
fontFamily: {
  'sans': 'Helvetica, Arial, sans-serif',

},
height:{
  '2.5': '30px',
  '150':'665px',
  '60':'50vh',
  'card':'330px',
},
transitionProperty: {
  'width': 'width',
  'height': 'height',
  'top': 'top',
  'spacing': 'margin, padding',
},
boxShadow: {
  'img': 'rgb(0 0 0 / 22%) 0px 8px 20px 0px',
  'txt': 'rgb(34 34 34 / 18%) -4px 8px 20px 0px;',
},
      backgroundImage:{
        'online':'url("https://cdn3.emoji.gg/emojis/8312-online.png")',
        'idle':'url("https://cdn3.emoji.gg/emojis/3929_idle.png")',
        'invis':'url("https://cdn3.emoji.gg/emojis/7445_status_offline.png")',
        'dnb':'url("https://cdn3.emoji.gg/emojis/7013-do-not-disturb.png")',
        'home':'url("https://andris.gauracs.com/static/media/triangle.cee26124.svg")',
        'phypaper':'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F234792995_Importance_of_Nuclear_Physics_to_NASA%2527%2527s_Space_Missions&psig=AOvVaw1m6wGeze9HGDqbHTf7yPZm&ust=1672236440599000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC58Kr8mfwCFQAAAAAdAAAAABBQ")',
      }
    }
  },
  
  plugins: [
    require('flowbite/plugin')
]}
