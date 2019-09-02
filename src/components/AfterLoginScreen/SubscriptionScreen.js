import React, {Component} from  'react';
import {View, Image, Dimensions, Text, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import { fonts } from '../../styles';
import { CheckBox } from 'react-native-elements';
import { BlackButton, MyList } from '../common';
import Icon from '../common/Icon';
import { NAMED_COLORS } from '../../common/AppColors';
import { subscriptionFeatureList } from '../../utils';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


class SubscriptionScreen extends Component {
  state = {
    checked: false
  }
  renderItem () {
    return subscriptionFeatureList.map(item =>{
      return <MyList icon={item.icon}  text={item.text}/>
    })
  }
  render() {
    console.log(screenHeight)
    return (
      // <View style={{flex: 14, backgroundColor: 'black'}}>
      //   <ImageBackground style={{flex: 14}}>
      //     {/* header */}
      //     <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-end', marginRight: screenWidth*0.01, flex: 1 }}>
      //       <TouchableOpacity onPress={() =>  this.props.navigation.goBack()}>
      //         <Icon name='uniF15D' color='white' size={30} />
      //       </TouchableOpacity>
      //     </View>
      //     <View style={{flex: 13}}>
      //       {/* title */}
      //       <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
      //         <Text style={{fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8}}>GO</Text>
      //         <Text style={{fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8, marginTop: 10}}>PREMIUM</Text>
      //       </View>
      //       {/* title */}

      //       {/* features */}
      //       <View style={{flex: 4, backgroundColor: 'yellow'}}>
      //       <FlatList
      //         data={[subscriptionFeatureList]}
      //         renderItem={({item}) => {<MyList icon={item.icon} text={item.text}/>}}
      //       />

      //       </View>
      //       {/* features */}

      //       {/* subscriptions list */}
      //       <View style={{flex: 5}}>

      //       </View>
      //       {/* subscriptions list */}            
      //     </View>
      //   </ImageBackground>
      // </View>

      <View style={{flex: 1}}>
        <Image source={require('../../assets/www/dist/img/suscriber.png')} style={styles.imageBackgroundStyle} 
        >
        </Image>
        <View style={[styles.containerStyle,{justifyContent: 'flex-start',paddingHorizontal: 40, height: screenHeight}]}>
          <Text style={[styles.textStyle,{marginTop: screenHeight/5, fontSize: 40}]}>SUSCRIBETE</Text>
          {this.renderItem()}
          <View style={{ marginTop:  48}}>
             <BlackButton style={{width: screenWidth*0.8, height: 65, justifyContent: 'center'}} color={'white'} backgroundColor={'#fd451e'} textStyle={{fontSize: 24, fontFamily: fonts.esp_light}} >SUSCRIBIRME</BlackButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  imageBackgroundStyle: { 
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 1,
    marginTop: -screenHeight/5
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontFamily: fonts.esp
  },
  containerStyle: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 888,
    justifyContent: 'center'
  }
}

export default SubscriptionScreen;