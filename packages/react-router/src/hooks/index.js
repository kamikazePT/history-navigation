import { useState, useEffect } from 'react';
import listenToNavigation from '@history-navigation/core';
import NAVIGATION from '../domain/constants';

export default function (history) {
  const [movement, setMovement] = useState(NAVIGATION.FORWARD);

  useEffect(
    () => history::listenToNavigation(
      () => setMovement(NAVIGATION.FORWARD),
      () => setMovement(NAVIGATION.BACK),
    ),
    [],
  );

  return movement;
}
