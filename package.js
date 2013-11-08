/***/
/* [hello] package.js */
var name = 'hello', pkg = {

  name: name,

  explain: {
    sammary: 'Show "hello, world." page.'
  },

  condition: {
    version: '1.0.0',
    status: 'developing'
  },

  repositories: {
    github: 'https://github.com/ystskm/foonyah-plugins-hello.git'
  },

  direct: {
    call: 'returnHTML'
  },

  css_files: [],
  //server_modules: ['index-svr'],
  //browser_modules: ['index'],
  dependencies: false,

  Default: {}

};

module.exports = (function() {
  return pkg;
})();