import React, { Component } from 'react';
import DayDetails from '../../components/AfterLoginScreen/Day/Details';
import { getDayDetails } from '../../../API';
import { Spinner } from '../../components/common';

class Details extends Component {
  state = {
    day: {},
    exercises: [],
    loading: true,
    canStart: false
  }

  componentDidMount() {
    const dayId = this.props.navigation.getParam('dayId', '1');
    getDayDetails(dayId).then(({days, can_start}) => {
      debugger
      this.setState({ day: days, exercises: days.exercises, loading: false, canStart: can_start })
    });
  };

  render() {
    if (this.state.loading)
      return <Spinner />
    return (
      <DayDetails navigation={this.props.navigation} day={this.state.day} canStart={this.state.canStart} exercises={this.state.exercises} />
    )
  }
};

export default Details;
