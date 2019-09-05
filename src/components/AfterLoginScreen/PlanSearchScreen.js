import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { SearchCard } from '../common/SearchCard';
import { NavigationActions } from 'react-navigation';
import { NoItem } from '../common';
import { BASE_URL } from '../../../API';
const screenHeight = Dimensions.get("window").height
class PlaneSearchScreen extends Component {
  navigateToPlan(id) {
    return NavigationActions.navigate({
      routeName: 'AfterLoginNavigator',
      params: { influencerId: id },
      action: NavigationActions.navigate({ routeName: 'PlanDetails', params: { planId: id } }),
    });
  }
  _renderPlans() {
    plans = this.props.screenProps.plans
    if (plans.length == 0)
      return (
        <View style={{flex: 1 , alignItems: 'center', height: screenHeight*0.8}}>
          <NoItem/>
        </View>
        )
    return plans.map(plan => {
      return (
        <TouchableHighlight onPress={() => this.props.navigation.dispatch(this.navigateToPlan(plan.id))}>
          <View style={{ height: 70 }}>
            <SearchCard title={plan.title} description={plan.plan_days} imgUrl={BASE_URL + plan.image_url} />
          </View>
        </TouchableHighlight>
      )
    })
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'black' }}
      keyboardShouldPersistTaps='handled'>
        {this._renderPlans()}
      </ScrollView>
    )
  }
}



export default PlaneSearchScreen