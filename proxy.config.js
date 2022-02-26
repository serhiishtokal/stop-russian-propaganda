const PROXY_CONFIG = {
    "/*": {
        target: "https://www.google.com",
        // router: function (req) {
        //     // some condition here
        //     console.log(req)
        //     var target = 'https://www.myrewrittenurl.com'; // or some custom code
        //     return target;
        // },
        //changeOrigin: true,
        secure: false,
        logLevel:"debug"
    }
};

module.exports = PROXY_CONFIG;