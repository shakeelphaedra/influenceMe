import React, {Component} from 'react';
import {View,  ScrollView, RefreshControl} from 'react-native';
import {getInfluencers, req,BASE_URL} from '../../../API';
import {Spinner, NoItem} from '../common';
import Influencer from './common/Card';

class InfluencersScreen extends Component {
  state = {
    influencersList: [],
    refreshing: false,
  }
  componentDidMount(){
    getInfluencers().then(data => {
      data.map(e => {
        splittedArray = e.video_url.split("v=");
        e['video_id'] =  splittedArray[splittedArray.length - 1]
        return e;
      })
      this.setState({influencersList: data})
      console.log(this.state.influencersList)
    })
  }
  _onRefresh  = () => {
    that = this;
    getInfluencers().then(data => {
      data.map(e => {
        splittedArray = e.video_url.split("v=");
        e['video_id'] =  splittedArray[splittedArray.length - 1]
        return e;
      })
      that.setState({influencersList: data, refreshing: false})
    })
  }
  
  _goToInfluencerDetails(id) {
    this.props.navigation.navigate('InfluencerDetails', {
      influencerId: id,
    });
  }

  _renderContent () {
    if(this.state.influencersList.length == 0)
      return <Spinner/>
    return this._renderInfluencersContainer()
  }

  _renderInfluencers () {
    if(this.state.influencersList.length == 0)
      return <NoItem/>
    return this.state.influencersList.map((influencer)=>{
      return (
        <View style={{height: 140}}>
          <Influencer id={influencer.id} onPress={() => this._goToInfluencerDetails(influencer.id)} 
            image_url={influencer.image_url} 
            name={influencer.name} 
            subTitle={influencer.title}
            titleStyle={styles.titleStyle}
            typeStyle={styles.descriptionStyle}
          />
        </View>
      )
    }) 
  }

  _renderInfluencersContainer(){
    return(
      <ScrollView 
        refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />
        }
      >
        {this._renderInfluencers()}
      </ScrollView>
    )
  }
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
          {this._renderContent()}
      </View>
    )
  }
}

const styles = {
    backgroundImageContainerStyle: {
        backgroundColor: '#A4A4A4',
        color: '#A7A7A7'
    },
    titleStyle: { 
        zIndex: 2,
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        opacity: 0.8
    },
    descriptionStyle: {
        zIndex: 2,
        fontSize: 14,
        color: 'white',
        opacity: 0.8
    },
    boxShadow: {
        position: 'absolute',
        top: 0,
        height: 10,
        width: '100%',
        marginTop: -10,
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        position: 'relative', marginLeft: 15, marginBottom: 20, alignItems: 'flex-end', flexDirection: 'row', flex: 1
    }

}

export default InfluencersScreen