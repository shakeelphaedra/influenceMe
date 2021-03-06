import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableHighlight , Dimensions} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SearchCard } from '../common/SearchCard';
import { NoItem } from '../common';
import { BASE_URL } from '../../../API';
const screenHeight =  Dimensions.get("window").height

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
      return (
        <View style={{flex: 1 , alignItems: 'center', height: screenHeight*0.8}}>
          <NoItem/>
        </View>
        )

    return influencers.map(inf => {
      return (
        <TouchableHighlight onPress={() => this.props.navigation.dispatch(this.navigateToInfluencer(inf.id))} >
          <View style={{ height: 120 }}>
            <SearchCard title={inf.name} description={inf.plans_count} imgUrl={inf.image_url ? inf.image_url.replace("http","https") : null} />
          </View>
        </TouchableHighlight>

      )
    })
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'black' }}
      keyboardShouldPersistTaps='handled'>
        {this._renderInfluencers()}
      </ScrollView>
    )
  }
}



export default InfluencerSearchScreen