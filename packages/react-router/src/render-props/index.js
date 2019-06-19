import { Component } from 'react';
import PropTypes from 'prop-types';
import listenToNavigation from '@history-navigation/core';
import NAVIGATION from '../domain/constants';

export default class Wrapper extends Component {
  state = NAVIGATION.FORWARD;

  componentDidMount() {
    const { history } = this.props;

    history::listenToNavigation(
      () => this.setState(NAVIGATION.FORWARD),
      () => this.setState(NAVIGATION.BACK),
    );
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}

Wrapper.propTypes = {
  history: PropTypes.shape({ listen: PropTypes.func.isRequired }).isRequired,
  children: PropTypes.func.isRequired,
};
