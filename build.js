var webpack = require('webpack');
var config = require('./webpack.prod.config');
var compiler = webpack(config);


compiler.run(function(err, stats) {
    if(err) {
        console.log(err);
    }
});

compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    if(err) {
        console.log(err);
    }

    console.log('--------')
});
