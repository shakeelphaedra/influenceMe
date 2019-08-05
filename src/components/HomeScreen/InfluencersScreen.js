import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Button, ImageBackground} from 'react-native';
import {getInfluencers, req,BASE_URL} from '../../../API';
import {Spinner} from '../common';

class InfluencersScreen extends Component {
    state = {
        influencersList: []
    }

    componentWillMount(){
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

    _renderContent () {
        if(this.state.influencersList.length == 0){
            return <Spinner/>
        }else{
            return this._renderInfluencers()
        }
    }

    _renderInfluencers(){
        return this.state.influencersList.map((influencer)=>{
            return (
                <View  key={influencer.id} style={styles.backgroundImageContainerStyle}>
                    <ImageBackground 
                        style={{width: '100%', height: 200, }}
                        source={{uri: BASE_URL + influencer.image_url}}
                    >
                        <View style={styles.boxShadow}>
                            <View style={{position: 'relative', flexDirection: 'column', flex: 1}}>
                                <Text style={styles.titleStyle}>{influencer.name}</Text>
                                <Text style={styles.descriptionStyle}>{influencer.description}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            )
        }) 
    }
    render () {
        return (
            <ScrollView >
                {this._renderContent()}
            </ScrollView>
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
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
        opacity: 0.8
    },
    descriptionStyle: {
        zIndex: 2,
        fontSize: 20,
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