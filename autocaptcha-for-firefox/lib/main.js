// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://academics.vit.ac.in/parent/parent_login.asp","https://academics.vit.ac.in/student/stud_login.asp","https://academics.vit.ac.in/parent/","https://academics.vit.ac.in/student/"],
  contentScriptFile: self.data.url("captcha.js")
});