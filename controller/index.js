/**
 * IndexController
 */
// 首页
exports.index = function(req, res) {
    res.render('index');
};

// FETools
exports.fetools = function(req, res) {
    res.render('tools/fetools');
};

// WiKi
exports.wiki = function(req, res) {
    res.render('wiki/index');
};

// jquery
exports.jquery = function(req, res) {
    res.render('wiki/jquery');
};

// Code
exports.code = function(req, res) {
    res.render('wiki/code');
};

// Wiki_Css
exports.Wiki_css = function(req, res) {
    res.render('wiki/css');
};

// FE环境
exports.ET_fe = function(req, res) {
    res.render('environment/fe');
};

// FE环境
exports.ET_java = function(req, res) {
    res.render('environment/java');
};

// RN环境
exports.ET_rn = function(req, res) {
    res.render('environment/rn');
};

