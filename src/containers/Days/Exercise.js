import React, { Component } from 'react';
import DayExercise from '../../components/AfterLoginScreen/Day/Exercise';
import { Spinner } from '../../components/common';
import { getExerciseDetails } from '../../../API';

class Exercise extends Component {
  state = {
    loading: true, count: 0, index: 0,
    exercise: {}
  }
  componentDidMount() {
    const exerciseId = this.props.navigation.getParam('exerciseId', '1');
    const count = this.props.navigation.getParam('count', '5');
    const index = this.props.navigation.getParam('index', '5');
    getExerciseDetails(exerciseId).then(({exercises, plan_level}) => {
      this.setState({ exercise: exercises, loading: false, count: count, index: index, plan_level })
    })
  };

  render() {
    if (this.state.loading)
      return <Spinner />
    return (
      <DayExercise navigation={this.props.navigation} exercise={this.state.exercise} count={this.state.count} index={this.state.index} plan_level={this.state.plan_level}/>
    )
  }
};

export default Exercise;
