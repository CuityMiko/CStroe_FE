/**
 * IndexRouter
 */
var Index = require('../controller/index.js');

module.exports = function(app) {
  // 首页
  app.get('/', Index.index);

  // FETools
  app.get('/fetools', Index.fetools);

  // WiKi
  app.get('/wiki', Index.wiki);

  // Jquery
  app.get('/wiki/jquery', Index.jquery);

  // Code
  app.get('/wiki/code', Index.code);

  // FE环境
  app.get('/environment/fe', Index.ET_fe);

   // Java环境
   app.get('/environment/java', Index.ET_java);

   // RN环境
   app.get('/environment/rn', Index.ET_rn);

   // Css
   app.get('/wiki/css', Index.Wiki_css);
};