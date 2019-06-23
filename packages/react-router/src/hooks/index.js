import { useRoutingNavigation } from '@history-navigation/react-history';
import useReactRouter from 'use-react-router';

/**
 * @kind function
 * @name useRoutingNavigation
 *
 * @example const { wasForward, wasBackward, steps } = useRoutingNavigation();
 *
 * @returns {Movement} - The movement state
 */
export default function () {
  const { history } = useReactRouter();

  const movement = useRoutingNavigation(history);

  return movement;
}
