import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, TouchableHighlight } from 'react-native';
import { Spinner, NoItem } from '../../common';
import { BG_COLOR, fonts, commonStyle } from '../../../styles';
import Icon from '../../common/Icon';
import { WebView } from 'react-native-webview';


screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;
class Exercise extends Component {
  _renderSeries(series, plan_level) {
    return series.map((serie, index) => {
      return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 30, flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12, textAlign: 'center', flex: 0.25}, commonStyle.shadowText]}>{index + 1}</Text>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>{serie.repetition} Reps</Text>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>{plan_level}</Text>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>{serie.time}"</Text>
          </View>
      )
    })

  }
  render() {
    const { exercise, plan_level } = this.props;
    return (
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <ScrollView>
          <View style={{ backgroundColor: BG_COLOR, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12 }, commonStyle.shadowText]}>{this.props.index} de {this.props.count}</Text>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12 }, commonStyle.shadowText]}>
              {((exercise.title).length > 25) ?
                (((exercise.title).substring(0, 25 - 3)) + '...') :
                exercise.title
              }
            </Text>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor={BG_COLOR}>
              <Icon name='uniF15D' color='white' size={30} />
            </TouchableHighlight>
          </View>
          <View style={{ width: '100%', height: 200, backgroundColor: 'black' }}>
            <WebView
              mediaPlaybackRequiresUserAction={true}
              source={{ uri: exercise.video_url }}
            />
          </View>
          {exercise.series.length > 0 ?
            <View style={{ backgroundColor: BG_COLOR }} >
              <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 15, padding: 15, marginTop: 10 }, commonStyle.shadowText]}>Funcional Core</Text>
              <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
                  <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 15, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>Serie</Text>
                  <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 15, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>Reps</Text>
                  <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 15, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>Nivel</Text>
                  <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 15, textAlign: 'center', flex: 0.25 }, commonStyle.shadowText]}>Tiempo</Text>
                </View>
                {this._renderSeries(exercise.series, plan_level)}
              </View>
            </View>
            : <NoItem/>
          }

        </ScrollView>
      </View>
    )
  }
};

export default Exercise;
