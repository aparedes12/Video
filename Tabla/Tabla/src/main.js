import { deportes } from '../data/deportes.js';
import Handlebars from 'handlebars';
import tablaTemplate from './partials/tablaDeportes.hbs?raw';
import '../style/main.less';


const mainTemplate = Handlebars.compile(`
  {{> tablaDeportes deportes=deportes }}
`);


Handlebars.registerPartial('tablaDeportes', tablaTemplate);


console.log(deportes);


const html = mainTemplate({ deportes });
document.getElementById('app').innerHTML = html;
