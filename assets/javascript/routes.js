require('riot-router');

module.exports = function () {
    const Route         = riot.router.Route;
    const DefaultRoute  = riot.router.DefaultRoute;
    //const NotFoundRoute = riot.router.NotFoundRoute;


    // Real routes definition
    // ==========================================================
    riot.router.routes([
        //new Route({tag: 'app'}).routes([
        //    new DefaultRoute({tag: 'events'})
        //
        //])
        new DefaultRoute({tag: 'home'})
    ]);



    // Start router
    // ==========================================================
    riot.router.start();
};