import React, {Component} from 'react';
import {TouchableWithoutFeedback,View, ImageBackground, Text} from 'react-native';
import {getInfluencers, req,BASE_URL} from '../../../../API';

class Influencer extends Component {
    render () {
        const  {onPress, description, name, id, image_url} = this.props;
        return (
            <TouchableWithoutFeedback key={id} onPress={onPress}>
                <View  style={styles.backgroundImageContainerStyle} >
                    <ImageBackground 
                        style={{width: '100%', height: '100%', }}
                        source={{uri: BASE_URL + image_url}}
                    >
                        <View style={styles.boxShadow}>
                            <View style={{position: 'relative', flexDirection: 'column', flex: 1}}>
                                <Text style={styles.titleStyle}>{name}</Text>
                                <Text style={styles.descriptionStyle}>{description}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
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
export {Influencer}