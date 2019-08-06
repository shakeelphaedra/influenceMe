import React , {Component} from 'react';
import {View, ScrollView, ImageBackground, Text, StyleSheet} from 'react-native';
import {Spinner} from '../../common';
import {BASE_URL, getInfluencerDetails} from '../../../../API';
import Video from 'react-native-video';
import {Influencer} from '../common';

class Details extends Component {

    state = {
        loading: true,
        influencer: {}
    };

    UNSAFE_componentWillMount () {
        const { navigation } = this.props;
        const influencerId = navigation.getParam('influencerId', 'NO-ID');
        getInfluencerDetails(influencerId).then(influencer => {
            this.setState({loading: false, influencer: influencer});
            console.log("got it")
        }).catch(error => {
        })
    };

    _renderPlanes (plans) {
        return plans.map((plan)=>(
            <View style={{marginTop: 35, height: 150}}>
                <Influencer id={plan.id} name={plan.title} description={plan.description} image_url={plan.image_url} /> 
            </View>
        ))
    }

    _renderDetails () {
        const {loading, influencer} = this.state;
        const {image_url, name, video_url, plans} = influencer;
        if(loading)
            return <Spinner/> 
        return(
            <ImageBackground style={{flex: 1, backgroundColor: '#4C4C4C' }} source={{uri: image_url ? BASE_URL + image_url : null}}>
                <ScrollView>
                    <View style={{margin: 25}}>
                        <View style={{alignItems: 'center', height:  300, marginBottom: '30%'}}>
                            <Text style={{
                                fontFamily: 'Esphimere',
                                alignSelf: 'center', color: 'white',
                                fontWeight: '500', fontSize: 35
                                }}>
                                {name}
                            </Text>
                        </View>
                        <View style={{alignItems: 'center', backgroundColor: 'white'}}>
                            <Video source={require('../../../assets/a.mp4')}   // Can be a URL or a local file.
                                ref={(ref) => {
                                    this.player = ref
                                }}                                      // Store reference
                                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                onError={this.videoError}               // Callback when video cannot be loaded
                                style={styles.backgroundVideo} />
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: 'Esphimere',
                                alignSelf: 'flex-start', color: 'white',
                                fontWeight: '500', fontSize: 16,
                                marginTop:  50
                            }}>
                                PLANES
                            </Text>
                            <View>
                                {this._renderPlanes(plans)}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
    render () {

        return (
            <View style={{flex: 1}}>
                {this._renderDetails()}
            </View>
        )
    }
};

var styles = StyleSheet.create({
    backgroundVideo: {
      height: 240,
      width: '100%'
    },
});   

export default Details;
