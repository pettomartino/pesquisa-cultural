require('riot-router');

module.exports = function () {
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

};