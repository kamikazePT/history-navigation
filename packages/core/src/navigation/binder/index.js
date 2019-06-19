/**
 * @module listenToNaviation (binder function)
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
 * listen to history navigation changes
 *
 * @example history::listenToNavigation(onForward, onBack)
 * @example listenToNavigation.bind(history)(onForward, onBack)
 *
 * @this
 * @param {onForward} onForward
 * @param {onBack} onBack
 */
export default function (onForward, onBack) {
  const keys = [];
  let previousKey;

  return this.listen((location) => {
    const { key } = location;

    const index = key ? keys.indexOf(key) : 0;
    const previousIndex = keys.indexOf(previousKey);
    if (index > previousIndex || index === -1) {
      if (index < 0) keys.push(key);
      onForward();
    } else {
      onBack();
    }

    previousKey = key;
  });
}
