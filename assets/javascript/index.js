/**
 * Created by petto on 3/30/16.
 */
/* global riot */
window.riot = require('riot');
require('./components/app');
require('./routes');

riot.mount('*');