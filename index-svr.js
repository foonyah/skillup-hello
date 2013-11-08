/***/
/* [hello] */
module.exports = function(plugin, mypkg) {
  // define
  var fncs = plugin.fncs(__dirname, {
    returnHTML: returnHTML
  });
  // set as prop
  plugin.init(fncs);
};
function returnHTML(res, loc, nav, callback) {
  fs.access(path.join(__dirname, 'contents', 'index.html'), function(err,
    byteRead, data) {
    callback(err, data);
  });
};
