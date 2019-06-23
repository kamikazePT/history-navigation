import { useState, useEffect } from 'react';
import listenToNavigation from '@history-navigation/history';

/**
 * @typedef History
 * @type {object}
 */

/**
 * @typedef Movement
 * @type {object}
 * @property {bool} wasForward - Flag for forward movement
 * @property {bool} wasBackward - Flag for backward movement
 * @property {number} steps - Number of steps between pages
 */

/**
 * @kind function
 * @name useRoutingNavigation
 *
 * @param {History} history - browser history instance from history npm module
 * @returns {Movement} - The movement state
 *
 * @example const { wasForward, wasBackward, steps } = useRoutingNavigation(history);
 *
 */
export default function (history) {
  const [movement, setMovement] = useState({ wasForward: false, steps: 0, wasBackward: false });

  useEffect(
    () => history::listenToNavigation(
      steps => setMovement({ wasForward: true, wasBackward: false, steps }),
      steps => setMovement({ wasForward: false, wasBackward: true, steps }),
    ),
    [],
  );

  return movement;
}
