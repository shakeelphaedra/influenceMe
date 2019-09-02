import React, { Component } from 'react';

import SearchScreen from '../../../components/AfterLoginScreen/SearchScreen';
import { Spinner } from '../../../components/common';
import TopSearchNavigation from '../../../navigations/TopSearchNavigation';
import { searchInfluencers, searchPlans } from '../../../../API';
class Search extends Component {
  state = {
    loading: false,
    influencers: [],
    plans: []
  }
  defaultNavigationOptions = {
    header: null
  }
  static router = {
    ...TopSearchNavigation.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return TopSearchNavigation.router.getStateForAction(action, lastState);
    },
  };

  submit({ search }) {
    searchInfluencers(search).then(res => {
      this.setState({ influencers: res })
    })
    searchPlans(search).then(res => {
      this.setState({ plans: res })
    })
  }

  render() {
    if (this.state.loading)
      return <Spinner />
    return <SearchScreen plans={this.state.plans} influencers={this.state.influencers} _handleSubmit={this.submit.bind(this)} navigation={this.props.navigation} />
  }
}

export default Search;