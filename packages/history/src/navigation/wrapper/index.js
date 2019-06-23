import listenToNavigation from '../binder';

/**
 * @module listenToNaviationWrapper
 */

/**
 * @kind function
 * @name listenToNaviationWrapper
 *
 *
 * @param {object} history - history object to use
 * @returns {function(onForward, onBack)} that listens to history navigation changes
 * @example listenToNavigation(history)(onForward, onBack)
 *
 */
export default history => history::listenToNavigation;
