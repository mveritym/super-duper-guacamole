var connect = require('connect');
var serveStatic = require('serve-static');

var static_dir = __dirname + '/dist/';

connect()
  .use(serveStatic(static_dir, {'index': ['public/index.html']}))
  .listen(8000, () => {
    console.log('Super duper guacamole running on 8000...');
  });