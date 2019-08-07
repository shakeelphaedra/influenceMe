import React , {Component} from 'react';
import {View, ScrollView,TouchableOpacity,ImageBackground, Text, StyleSheet, Dimensions} from 'react-native';
import {Spinner} from '../../common';
import {BASE_URL, getInfluencerDetails} from '../../../../API';
import Video from 'react-native-video';
import {Influencer} from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ViewMoreText from 'react-native-view-more-text';

screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class Details extends Component {
    
    currHeight = 0;
    prevHeight = 0;
    scrollHeight = 400;
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

    renderViewMore(onPress){
        return(
          <Text onPress={onPress}>View more</Text>
        )
      }
      renderViewLess(onPress){
        return(
          <Text onPress={onPress}>View less</Text>
        )
      }

    _renderPlanes (plans) {
        return plans.map((plan)=>(
            <View style={{marginTop: 35, height: 150}}>
                <Influencer id={plan.id} name={plan.title} description={plan.description} image_url={plan.image_url} /> 
            </View>
        ))
    }
    scrollToBottom (){
        this.scrollHeight += screenHeight;
        this.refs.scrollView.getScrollResponder().scrollResponderScrollTo({
            x: 0,
            y: this.scrollHeight,
            animated: true
        });
    };
    _renderDetails () {
        const {loading, influencer} = this.state;
        const {image_url, name, video_url, plans} = influencer;
        if(loading)
            return <Spinner/> 
        return(
            <ImageBackground style={{flex: 1, backgroundColor: '#4C4C4C' }} source={{uri: image_url ? BASE_URL + image_url : null}}>
                <ScrollView
                        ref="scrollView"
                        onLayout={ev => {
                        // Fires once
                        const fixedContentHeight = ev.nativeEvent.layout.height;
                        this.prevHeight = fixedContentHeight;
                        }}
                    >
                    <View style={{margin:25, marginTop: (screenHeight/2)+100}}>
                        <View style={{alignItems: 'center', height:  150}}>
                            <Text style={{
                                fontFamily: 'Esphimere',
                                alignSelf: 'center', color: 'white',
                                fontWeight: '500', fontSize: 35
                                }}>
                                {name}
                            </Text>
                            <TouchableOpacity onPress={()=> this.scrollToBottom()} style={{marginTop: 30}}>
                                <FontAwesomeIcon icon={faChevronDown}  color={'white'} size={20} />
                            </TouchableOpacity>
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
                        <ViewMoreText
                                style={{alignSelf: 'center'}}
                                numberOfLines={3}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                                textStyle={{textAlign: 'center'}}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        
                        </ViewMoreText>
                        <TouchableOpacity onPress={()=> this.scrollToBottom()} style={{marginTop: 30}}>
                                <FontAwesomeIcon icon={faChevronDown}  color={'white'} size={20} />
                            </TouchableOpacity>
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
