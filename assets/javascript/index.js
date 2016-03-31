/**
 * Created by petto on 3/30/16.
 */
/* global riot */
window.riot = require('riot');
require('riot-router');
require('./components/app');

riot.mount('*');

const Route         = riot.router.Route;
const DefaultRoute  = riot.router.DefaultRoute;
//const NotFoundRoute = riot.router.NotFoundRoute;


// Real routes definition
// ==========================================================

riot.router.routes([
    new DefaultRoute({tag: 'home'})
]);



// Start router
// ==========================================================

riot.router.start();
riot.route('/');

