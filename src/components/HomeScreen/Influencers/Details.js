import React , {Component} from 'react';
import {View, ScrollView,TouchableOpacity,ImageBackground, Text, StyleSheet, Dimensions} from 'react-native';
import {Spinner} from '../../common';
import {BASE_URL, getInfluencerDetails} from '../../../../API';
import Video from 'react-native-video';
import Influencer from '../common/Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ViewMoreText from 'react-native-view-more-text';
import {FONT_FAMILY, FONT_SIZE, BG_COLOR, RED_TEXT} from '../../../styles';

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

    componentDidMount () {
        const { navigation } = this.props;
        const influencerId = navigation.getParam('influencerId', '5');
        getInfluencerDetails(influencerId).then(influencer => {
            this.setState({loading: false, influencer: influencer});
            console.log("got it")
        }).catch(error => {
        })
    };

    renderViewMore(onPress){
        return(
          <Text onPress={onPress} style={styles.viewMoreStyle}>View more</Text>
        )
      }
      renderViewLess(onPress){
        return(
          <Text onPress={onPress} style={styles.viewMoreStyle}>Leer Menos ^</Text>
        )
      }

    _renderPlanes (plans,name) {
        return plans.map((plan)=>(
            <View style={{marginTop: 35, height: 150}}>
                <Influencer id={plan.id} name={name} titleStyle={{fontSize: 16, marginBottom: 0, marginLeft: 22}} typeStyle={{ fontSize: 24, marginLeft: 22, marginBottom: 4}} type={plan.title} image_url={plan.image_url} /> 
            </View>
        ))
    }
    _scrollToBottom (){
        this.scrollHeight = screenHeight;
        this.refs.scrollView.getScrollResponder().scrollResponderScrollTo({
            x: 0,
            y: this.scrollHeight,
            animated: true
        });
    };
    _renderDetails () {
        const {loading, influencer} = this.state;
        const {image_url, name, video_url, plans, description} = influencer;
        if(loading)
            return <Spinner/> 
        return(
            <ImageBackground style={{flex: 1, backgroundColor: BG_COLOR }} source={{uri: image_url ? BASE_URL + image_url : null}}>
                <ScrollView
                        ref="scrollView"
                        onLayout={ev => {
                        // Fires once
                        const fixedContentHeight = ev.nativeEvent.layout.height;
                        this.prevHeight = fixedContentHeight;
                        }}
                    >
                    <View style={{margin:25}}>
                        <View style={{ flex: 1,height: screenHeight-(screenHeight/100)*30, justifyContent: 'flex-end' , marginVertical: 50}}>
                            <Text style={[{
                                fontFamily: 'Esphimere',
                                alignSelf: 'center', color: 'white',
                                fontWeight: '500', fontSize: 35
                                }, styles.shadowStyle]}>
                                {name}
                            </Text>
                            <TouchableOpacity onPress={()=> this._scrollToBottom()} style={{marginTop: 30, alignSelf: 'center'}}>
                                <FontAwesomeIcon icon={faChevronDown}  color={'white'} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Video source={require('../../../assets/a.mp4')}   // Can be a URL or a local file.
                                ref={(ref) => {
                                    this.player = ref
                                }}                                      // Store reference
                                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                onError={this.videoError}               // Callback when video cannot be loaded
                                style={styles.backgroundVideo} />
                            
                        </View>
                        <View style={{alignItems: 'center', marginTop: 20, }}>
                            <Text style={[styles.textStyle,{fontWeight: 'bold', alignSelf: 'flex-start', marginVertical: 30}]}>ARECA DE</Text>
                            <ViewMoreText
                                    containerStyle={{flexDirection: 'row' }}
                                    numberOfLines={6}
                                    renderViewMore={this.renderViewMore}
                                    renderViewLess={this.renderViewLess}
                                    textStyle={styles.textStyle}
                            >
                                {description}
                            </ViewMoreText>
                        </View>
                        <View>
                            <Text style={[{
                                fontFamily: 'Esphimere',
                                alignSelf: 'flex-start', color: 'white',
                                fontWeight: '500', fontSize: FONT_SIZE,
                                marginTop:  50
                            }, styles.shadowStyle]}>
                                PLANES
                            </Text>
                            <View>
                                {this._renderPlanes(plans, name)}
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
      height: 192,
      width: '100%',
    },
    textStyle: {
        textAlign: 'justify',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        fontFamily: FONT_FAMILY, fontSize:  FONT_SIZE, color: 'white',
        lineHeight: 20
    },
    viewMoreStyle: {
        color: RED_TEXT, 
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        fontSize: FONT_SIZE, fontFamily: FONT_FAMILY, fontWeight: '500'
    },
    shadowStyle: {
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
    }
});   

export default Details;
