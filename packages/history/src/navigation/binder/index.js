/**
 * @module listenToNaviationBinder
 */

/**
 * Callback to execute when history moves forward.
 *
 * @kind function
 * @name onForward
 * @callback onForward
 * @param {number} steps - number of steps in history
 */

/**
 * Callback to execute when history moves backwards.
 *
 * @kind function
 * @name onBack
 * @callback onBack
 * @param {number} steps - number of steps in history
 */

/**
 * listen to history navigation changes
 *
 * @kind function
 * @name listenToNaviationBinder
 *
 * @param {onForward} onForward - callback on forward movement
 * @param {onBack} onBack - callback on back movement
 * @example history::listenToNavigation(onForward, onBack)
 * @example listenToNavigation.bind(history)(onForward, onBack)
 *
 * @this
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
