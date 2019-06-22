import { Component } from 'react';
import PropTypes from 'prop-types';
import listenToNavigation from '@history-navigation/history';

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
