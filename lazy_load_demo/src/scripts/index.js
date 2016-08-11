var mainMod = require("./depends/mod1");
var neofeLoad = require("neofe-load");
//如果用其他域名加载资源，需要修改Config.base
//neofeLoad.Config.base = "//cdn.domain/";

mainMod.print();
setTimeout(function() {
  //导出文件地址 会和 neofeLoad.Config.base 拼接而成
  neofeLoad.loadModule("/src/scripts/depends/mod2.js", function() {
    //默认 expose 名为文件路径 
    //var subMod = require("src/scripts/depends/mod2.js");
    //配置expose
    var subMod = require("mod2.js");
    subMod.print();
  });
}, 2000);


