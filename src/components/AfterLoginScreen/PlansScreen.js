import React, {Component} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {getPlans} from '../../../API';
import {Spinner, NoItem} from '../common';
import  Plan from './common/Card';

class PlanesScreen extends Component {
  state = {
    plansList: [],
    refreshing: false
  }

  componentDidMount(){
    getPlans().then(data => {
      this.setState({plansList: data})
      console.log(this.state.plansList)
    })
  }

  _onRefresh = () => {
    getPlans().then(data => {
      this.setState({plansList: data, refreshing: false})
    })
  }

  _goToPlanDetails(id) {
    this.props.navigation.navigate('PlanDetails', {
      planId: id,
    });
  }

  _renderContent () {
    if(this.state.plansList.length == 0)
      return <Spinner/>
    return this._renderPlansContainer()
  }

  _renderPlans() {
    if(this.state.plansList.length == 0)
      return <NoItem/>
    return this.state.plansList.map((plan)=>{
      return (
        <View style={{height: 140}}>
          <Plan id={plan.id} onPress={() => this._goToPlanDetails(plan.id)}  typeStyle={styles.descriptionStyle} titleStyle={styles.titleStyle} image_url={plan.image_url} name={plan.influencer.name} subTitle={plan.title}/>
        </View>
      )
    }) 
  }
  _renderPlansContainer(){
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
          />
        }
      >
        {this._renderPlans()}
      </ScrollView>
    )
  }
  render () {
    return (
      <View  style={{flex: 1, backgroundColor: 'black'}}>
        {this._renderContent()}
      </View>
    )
  }
}

const styles = {
    titleStyle: { 
        zIndex: 2,
        fontSize: 14,
        marginBottom: 20,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 0,
        textShadowColor: 'none',
        color: 'white',
        opacity: 0.8
    },
    descriptionStyle: {
        zIndex: 2,
        fontSize: 20,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 0,
        textShadowColor: 'none',
        color: 'white',
        opacity: 0.8
    }
}

export default PlanesScreen