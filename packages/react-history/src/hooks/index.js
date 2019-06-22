import { useState, useEffect } from 'react';
import listenToNavigation from '@history-navigation/history';

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
