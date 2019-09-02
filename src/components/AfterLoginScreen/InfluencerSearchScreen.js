import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { SearchCard } from '../common/SearchCard';
import { NoItem } from '../common';
import { BASE_URL } from '../../../API';



class InfluencerSearchScreen extends Component {
  navigateToInfluencer(id) {
    return NavigationActions.navigate({
      routeName: 'AfterLoginNavigator',
      params: { influencerId: id },
      action: NavigationActions.navigate({ routeName: 'InfluencerDetails', params: { influencerId: id } }),
    });
  }

  _renderInfluencers() {
    influencers = this.props.screenProps.influencers;
    if (influencers.length == 0)
      return <NoItem />
    return influencers.map(inf => {
      return (
        <TouchableHighlight onPress={() => this.props.navigation.dispatch(this.navigateToInfluencer(inf.id))}>
          <View style={{ height: 120 }}>
            <SearchCard title={inf.name} description={inf.plans_count} imgUrl={ BASE_URL + inf.image_url} />
          </View>
        </TouchableHighlight>

      )
    })
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
        {this._renderInfluencers()}
      </ScrollView>
    )
  }
}



export default InfluencerSearchScreen