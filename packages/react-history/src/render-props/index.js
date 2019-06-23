import { Component } from 'react';
import PropTypes from 'prop-types';
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
 * @kind class
 * @name RoutingNavigation
 *
 * @param {History} props.history - browser history instance from history npm module
 * @param {func} props.chilren - Children function
 * @returns {jsx}
 */
export default class Wrapper extends Component {
  state = { wasForward: false, steps: 0, wasBackward: false };

  componentDidMount() {
    const { history } = this.props;

    history::listenToNavigation(
      steps => this.setState({ wasForward: true, wasBackward: false, steps }),
      steps => this.setState({ wasForward: false, wasBackward: true, steps }),
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
