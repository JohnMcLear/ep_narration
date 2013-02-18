var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_narration/templates/scripts.html", {}, module);
  return cb();
};

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = eejs.require("ep_narration/templates/button.html", {}, module) + args.content;
  return cb();
};

exports.eejsBlock_timesliderTop = function (hook_name, args, cb) {
  args.content = eejs.require("ep_narration/templates/timesliderTop.ejs", {}, module) + args.content;
  return cb();
};

exports.eejsBlock_timesliderScripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_narration/templates/scripts.html", {}, module);
  return cb();
};

exports.eejsBlock_timesliderStyles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_narration/templates/styles.html", {}, module);
  return cb();
};

