import React from 'react';
import { View, Text, Image, } from 'react-native'
import { BG_COLOR, commonStyle, fonts } from '../../styles';

class SearchCard extends React.Component {
  render() {
    const {
      imgUrl, title, description
    } = this.props;
    return (
      <View style={styles.spinnerStyle}>
        <View style={{ backgroundColor: 'grey', flex: 0.4 }}>
          <Image source={{ uri: imgUrl }} style={{ height: '100%', width: '100%' }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.6 }}>
          <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp, fontSize: 12 }]}>{title}</Text>
          <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 12 }]}>{description}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    backgroundColor: BG_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
}


export { SearchCard };