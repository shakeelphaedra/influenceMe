import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import InfluencersScreen from './InfluencersScreen';
import {GreyHeader} from '../common';

class EnteranceScreen extends Component {
    state = {
        activeTab: 1,
    }
    
    _renderContent () {
        if(this.state.activeTab == 1){
           return <InfluencersScreen/>
        }
        if(this.state.activeTab==2){
            console.log("planeScreen")
        }
    }
    
    
    render () {
        return (
            <View style={{flex:1}}>
               <GreyHeader> 
                   <View style={{flex: 1}}>
                   <View style={{ flex:1,flexDirection: 'row',height: 30}}>
                        <TouchableHighlight onPress={() => {this.setState({activeTab: 1})}} style={{width: '50%', backgroundColor: '#4C4C4C'}}><Text>Planes</Text></TouchableHighlight>
                        <TouchableHighlight onPress={() => {this.setState({activeTab: 2})}} style={{width: '50%', backgroundColor: '#4C4C4C'}}><Text>Planes</Text></TouchableHighlight>
                    </View>
                    </View>
                </GreyHeader>
                <View style={{flex: 1}}>
                    {this._renderContent()}
                </View>
                
            </View>
        )
    }
}


const styles = {
    backgroundImageContainerStyle: {
        backgroundColor: 'red',
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


export default EnteranceScreen