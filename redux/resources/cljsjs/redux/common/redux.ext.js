/**********************************************************************
 * Externs for Redux
 * Generated by hand
 **********************************************************************/

var Redux = {};
Redux.__esModule;
Redux.applyMiddleware = function () {};
Redux.bindActionCreators = function () {};
Redux.combineReducers = function () {};
Redux.compose = function () {};

/**
 * @param {function} reducer
 * @param {*=} preloadedState
 * @param {function=} enhancer
 * @return {Redux.Store}
 */
Redux.createStore = function(reducer, preloadedState, enhancer) {};

/**
 * @interface
 *
*/
Redux.Store = function() {};

Redux.Store.prototype.getState = function() {};
Redux.Store.prototype.dispatch = function() {};
Redux.Store.prototype.subscribe = function() {};
Redux.Store.prototype.replaceReducer = function() {};
