import React from 'react';
import { RoutingNavigation } from '@history-navigation/react-history';
import { withRouter } from 'react-router';

/**
 * @kind function
 * @name RoutingNavigation
 *
 * @returns {jsx}
 */
function Wrapper(props) {
  return <RoutingNavigation {...props} />;
}

export default withRouter(Wrapper);
