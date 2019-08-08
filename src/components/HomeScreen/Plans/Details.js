import React , {Component} from 'react';
import {View, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import {Spinner} from '../../common';
import Day from '../common/Card';
import {getPlanDetails} from '../../../../API';
import Video from 'react-native-video';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {FONT_FAMILY, FONT_SIZE, SCREEN_BG_COLOR, RED_TEXT} from '../../../styles';

screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class Details extends Component {
    currHeight = 0;
    prevHeight = 0;
    scrollHeight = 400;
    state = {
        loading: true,
        plan: {}
    };

    componentDidMount () {
        const { navigation } = this.props;
        const planId = navigation.getParam('planId', '6');
        getPlanDetails(planId).then(plan => {
            this.setState({loading: false, plan: plan});
            console.log("got it")
        }).catch(error => {
        })
    };

    _scrollToBottom (){
        this.scrollHeight = screenHeight;
        this.refs.scrollView.getScrollResponder().scrollResponderScrollTo({
            x: 0,
            y: this.scrollHeight,
            animated: true
        });
    };
   
    render () {

        return (
            <View style={{flex: 1, backgroundColor: SCREEN_BG_COLOR}}>
                <ScrollView
                        ref="scrollView"
                        onLayout={ev => {
                        // Fires once
                        const fixedContentHeight = ev.nativeEvent.layout.height;
                        this.prevHeight = fixedContentHeight;
                        }}
                        style={{ marginHorizontal: 20}}
                    >

                        <View style={{alignItems: 'center', marginTop: 40}}>
                            <Text style={styles.textStyle}>Resumen del plan</Text>
                            <Video source={require('../../../assets/a.mp4')}   // Can be a URL or a local file.
                                ref={(ref) => {
                                    this.player = ref
                                }}                                      // Store reference
                                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                onError={this.videoError}  
                                style={styles.backgroundVideo} />
                            
                            <Text style={[styles.textStyle,{marginTop: 8}]}>Resumen del plan</Text>
                            <Text style={[styles.textStyle,{marginVertical: 12, fontSize: 15, fontWeight: '500'}]}>Gluteos de Acero</Text>
                            <Text style={[styles.textStyle,{marginBottom: 3}]}>6 Smenas | 5 dias a la Semana | 60 Mins</Text>
                            <Text style={[styles.textStyle,{fontWeight: '400', lineHeight: 12, textAlign: 'justify' }]}>Gloteos mas grandas y mas firmas: Yarishna to propone su plan inflible pare que lograr la cola que siemore has querido sea una realided.</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', borderColor: 'white', borderWidth: 1, borderBottomWidth: 0}}>
                            <View style={{justifyContent: 'center', marginHorizontal: 25, marginVertical: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12, fontWeight: '400'}]}>NIVEL</Text>
                            </View>
                            <View style={{ justifyContent: 'center', marginHorizontal: 25, marginVertical: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12, fontWeight: '400'}]}>TIPO</Text>
                            </View>
                            <View style={{ justifyContent: 'center', marginHorizontal: 25, marginVertical: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12, fontWeight: '400'}]}>UBICACION</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: 'white', borderWidth: 1}}>
                            <View style={{justifyContent: 'center',alignSelf: 'center', marginVertical: 10, marginLeft: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12,alignSelf: 'center', fontWeight: '300'}]}>Principiante</Text>
                            </View>
                            <View style={{ justifyContent: 'center',alignSelf: 'center', marginVertical: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12,alignSelf: 'center', fontWeight: '300'}]}>Pesas-Funcional</Text>
                            </View>
                            <View style={{ justifyContent: 'center',alignSelf: 'center', marginVertical: 10}}>
                                <Text style={[styles.textStyle,{fontSize: 12, alignSelf: 'center',fontWeight: '300', marginRight: 10}]}>Gimnacio</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=> this._scrollToBottom()} style={{marginTop: 15, alignSelf: 'center'}}>
                                <FontAwesomeIcon icon={faChevronDown}  color={'white'} size={50} style={{fontWeight: '200'}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', marginTop: 45}}>
                            <Text style={[styles.textStyle, {marginVertical: 30}]}>Rutine del Plans</Text>
                            <View>

                                <Day/>
                                <Day />
                                <Day/>
                            </View>
                        </View>
                </ScrollView>
            </View>
        )
    }
};

var styles = StyleSheet.create({
    backgroundVideo: {
      height: 192,
      marginTop: 10,
      width: '100%',
    },
    textStyle: {
        textAlign: 'justify',
        textShadowColor: 'black',
        color: 'white',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        fontWeight: '600',
        fontFamily: FONT_FAMILY, 
        fontSize:  10, 
        color: 'white',
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
