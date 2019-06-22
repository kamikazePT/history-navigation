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

    const index = keys.indexOf(key);
    const hackedIndex = key ? index : 0;
    const previousIndex = keys.indexOf(previousKey);

    if (hackedIndex > previousIndex || hackedIndex === -1) {
      let steps;
      if (hackedIndex < 0) {
        steps = 1;
        keys.push(key);
      } else steps = hackedIndex - previousIndex;

      onForward(steps);
    } else {
      onBack(previousIndex - index);
    }

    previousKey = key;
  });
}
