import listenToNavigation from '../binder';

/**
 * @module listenToNaviation (wrapper function)
 */

/**
 * Callback to execute when history moves forward.
 *
 * @callback onForward
 */

/**
 * Callback to execute when history moves backwards.
 *
 * @callback onBack
 */

/**
 * @example listenToNavigation(history)(onForward, onBack)
 *
 * @param {object} history - history object to use
 * @returns {function(onForward, onBack)} that listens to history navigation changes
 */
export default history => history::listenToNavigation;
