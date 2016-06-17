// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/parent/parent_login.asp","https://vtop.vit.ac.in/student/stud_login.asp","https://vtop.vit.ac.in/parent/","https://vtop.vit.ac.in/student/","https://115.248.50.212/parent/parent_login.asp","https://115.248.50.212/student/stud_login.asp","https://115.248.50.212/parent/","https://115.248.50.212/student/"],
  contentScriptFile: self.data.url("captcha.js")
});

pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)|(115.248.50.212)\/(.)*\/attn_report.asp(.)*/,
  contentScriptFile: self.data.url("attendance.js"),
  attachTo: ["existing","top","frame"]
});