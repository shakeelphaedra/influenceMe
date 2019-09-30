import React, {Component} from 'react';
import {View, Image} from 'react-native';

class ImageWithPlaceHolder extends Component {
    state = {placeHolderRemove: false}
    removePlaceHolder() {
        that = this;
        this.setState({ placeHolderRemove: true })
      }

    render() {
        return (
            <View  style={{height: '100%', width: '100%',justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/www/dist/img/picture-w.png')} style={{ height: 40, width: 40, alignSelf: 'center', left: 0 , right: 0, display: this.state.placeHolderRemove ? 'none' : 'flex', opacity: 0.7, }}
                 />
                <Image source={{uri: this.props.uri}} style={{height: '100%', width: '100%',zIndex: 9999999, top: 0, bottom: 0,left: 0, right: 0, position: 'absolute'}}
                    onLoad={this.removePlaceHolder.bind(this)}
                />
            </View>
        )
    }
}

export {ImageWithPlaceHolder};