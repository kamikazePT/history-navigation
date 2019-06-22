import { useRoutingNavigation } from '@history-navigation/react-history';
import useReactRouter from 'use-react-router';

export default function () {
  const { history } = useReactRouter();

  const movement = useRoutingNavigation(history);

  return movement;
}
