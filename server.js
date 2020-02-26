const next = require('next');
const http = require('http');
const url = require('url');
const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV != 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    http.createServer((req, res) => {
        //Parse request url to get it's pathname 
        const parseUrl = url.parse(req.url, true);
        const {pathname}  = parseUrl

        //If a service worker requested, serve it as a  static file
        if(pathname === '/service-worker.js'){
            const filepath = path.join(__dirname, '.next', pathname);
            app.serveStatic(req, res, filepath);


        }
        else{ //Let's Next takes care of it
            handle(req,res, parseUrl)
        }
    }).listen(port, () => {
        console.log(`listening on port ${port}`);
    })

})