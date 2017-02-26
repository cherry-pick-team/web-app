import koa from 'koa'
import serve from 'koa-static-folder'
import { createLocation } from 'history'
import { RoutingContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import React from 'react'
import routes from '../src/layouts/App/App'

const app = koa();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const indexHtml = `
    
`;

console.log(routes, routes());

app.use(serve('./public'));

app.use(function *(){
    let location = createLocation(this.req.url);

    match({ routes, location }, (error, redirectLocation, renderProps) => {
        // if (redirectLocation) {
        //     this.redirect(redirectLocation.pathname + redirectLocation.search)
        // } else if (error) {
        //     this.throw(500, error.message)
        // } else if (renderProps == null) {
        //     this.throw(404, 'Not Found')
        // } else {
        //     // set proper HTTP code for if matched route wasn't found
        //     if (renderProps.components.indexOf(NotFound) != -1) {
        //         this.status = 404
        //     }
        //     this.response.body = '';
        // }
        console.log(error, redirectLocation, renderProps);
    })
});

app.listen(port, host, () => { console.log('Server is listening on ' + host + ':' + port) } );