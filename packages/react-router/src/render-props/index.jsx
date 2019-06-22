import React from 'react';
import { RoutingNavigation } from '@history-navigation/react-history';
import { withRouter } from 'react-router';

function Wrapper(props) {
  return <RoutingNavigation {...props} />;
}

export default withRouter(Wrapper);
