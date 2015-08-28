
// Start the app by listening on <port>
//var port = process.env.PORT || config.port;
//app.listen(port);
//console.log('Express app started on port ' + port);

// Initializing logger
//logger.init(app, passport, mongoose);

// Expose app
//exports = module.exports = app;


// Start dollarbot
console.log("Starting dollarbot");
//process.env.INTRANET = config.app.url;
//process.env.BOT_TOKEN = 'xoxb-8055984193-DRM5vkJ4MEmdgZ6wdgYVF1Y4'; // require('rand-token').generate(16);
require('slack-dollar-bot');
console.log("Started dollarbot");

console.log("Starting photobot yeah");
//process.env.INTRANET = config.app.url;
//process.env.BOT_TOKEN = 'xoxb-8055984193-DRM5vkJ4MEmdgZ6wdgYVF1Y4'; // require('rand-token').generate(16);
require('slack-photobot');
console.log("Started photobot");
