import React, { Component } from 'react';
import DayDetails from '../../components/AfterLoginScreen/Day/Details';
import { getDayDetails } from '../../../API';
import { Spinner } from '../../components/common';

class Details extends Component {
  state = {
    day: {},
    exercises: [],
    loading: true
  }

  componentDidMount() {
    const dayId = this.props.navigation.getParam('dayId', '1');
    getDayDetails(dayId).then((day) => {
      this.setState({ day: day, exercises: day.exercises, loading: false })
    });
  };

  render() {
    if (this.state.loading)
      return <Spinner />
    return (
      <DayDetails navigation={this.props.navigation} day={this.state.day} exercises={this.state.exercises} />
    )
  }
};

export default Details;
