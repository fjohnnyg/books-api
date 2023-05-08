const corsProxy = require('cors-anywhere');

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
}).listen(8080, () => {
  console.log('CORS Anywhere server listening on port 8080');
});