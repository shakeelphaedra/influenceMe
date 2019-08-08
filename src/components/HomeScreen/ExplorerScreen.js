import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import InfluencersScreen from './InfluencersScreen';
import PlansScreen from './PlansScreen';
import {GreyHeader} from '../common';

class ExplorerScreen extends Component {
    state = {
        activeTab: 1,
    }
    
    _renderContent () {
        if(this.state.activeTab == 1)
           return <InfluencersScreen navigation={this.props.navigation}/>
        return <PlansScreen navigation={this.props.navigation}/>
    }
    
    render () {
        return (
            <View style={{flex: 12}}>
                <View style={{flex: 1}}>
                    <GreyHeader /> 
                </View>
                <View style={{flex: 1, backgroundColor: 'red'}}>
                   <View style={{flexDirection: 'row', flex: 1}}>
                        <TouchableHighlight onPress={() => {this.setState({activeTab: 1})}} 
                        style={[styles.tabContainerStyle,this.state.activeTab == 1 ? styles.activeTabStyle : {}]}>
                            <Text
                                style={[styles.textStyle, this.state.activeTab == 1 ? styles.activeTabTextStyle : {}]}>
                                INFLUENCERS
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {this.setState({activeTab: 2})}} 
                         style={[styles.tabContainerStyle,this.state.activeTab == 2 ? styles.activeTabStyle : {}]}>
                         <Text
                             style={[styles.textStyle, this.state.activeTab == 2 ? styles.activeTabTextStyle : {}]}>
                             PLANES
                         </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{flex: 11}}>
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
    },
    textStyle: {
        color: 'white',
        fontWeight: "400",
        marginTop: 20,
        fontSize: 19
    },
    tabContainerStyle: {
        width: '50%',
        backgroundColor: '#4C4C4C',
        alignItems: 'center'
    },
    activeTabStyle: {
        borderBottomWidth: 4,
        borderBottomColor: 'red',
    },
    activeTabTextStyle: {
        color: 'red'
    }

}
export default ExplorerScreen