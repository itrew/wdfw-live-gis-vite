import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import '/node_modules/reveal.js/dist/reveal.css';
import '/node_modules/reveal.js/dist/theme/black.css';
import './assets/index.css';

let deck = new Reveal({
  hash: true,
  parallaxBackgroundImage: './topo-parallax.png',
  parallaxBackgroundSize: '3732px 1080px',
  plugins: [ Markdown ]
})
deck.initialize();
