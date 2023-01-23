module.exports = {
    apps : [{
      name   : "app-test",
      script : "node server.js",
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
       log_file: 'logs/combined.log',
       time : true
    }]
  }