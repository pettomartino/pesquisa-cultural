/**
 * Created by petto on 3/30/16.
 */
/* global riot */
window.riot = require('riot');
require('./components/app');
require('./components/navbar');
// require('./routes')();
riot.mount('*');
