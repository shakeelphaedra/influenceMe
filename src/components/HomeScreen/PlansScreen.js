import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {getPlans} from '../../../API';
import {Spinner} from '../common';
import {Plan} from './common';

class PlanesScreen extends Component {
    state = {
        plansList: []
    }

    componentDidMount(){
        getPlans().then(data => {
            this.setState({plansList: data})
            console.log(this.state.plansList)
        })
    }
    
    _goToPlanDetails(id) {
        this.props.navigation.navigate('planDetails', {
            planId: id,
        });
    }

    _renderContent () {
        if(this.state.plansList.length == 0)
            return <Spinner/>
        return this._renderPlans()
    }

    _renderPlans(){
        return this.state.plansList.map((plan)=>{
            return (
                <View style={{height: 150}}>
                    <Plan id={plan.id} onPress={() => this._goToPlanDetails(plan.id)} image_url={plan.image_url} name={plan.name} type={plan.type}/>
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

export default PlanesScreen