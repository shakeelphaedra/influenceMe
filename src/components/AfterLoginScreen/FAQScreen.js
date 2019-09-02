import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, ScrollView, Animated } from 'react-native';
import { GreyHeader, Spinner } from '../common';
import { BG_COLOR, fonts } from '../../styles';
import Icon from '../common/Icon';
import { NAMED_COLORS } from '../../common/AppColors';
import { getFAQs } from '../../../API';
import { Grayscale } from 'react-native-color-matrix-image-filters';

class FAQScreen extends Component {
  state = {
    faqs: [],
    loading: false,
    activeTab: 0,
  }
  activeInactive(id) {
    if (this.state.activeTab == id)
      return this.setState({ activeTab: 0 })
    this.setState({ activeTab: id })
  }
  _renderList() {
    return this.state.faqs.map((item) => {
      return (
        <View>
          <TouchableOpacity onPress={() => this.activeInactive(item.id)}><View style={{ borderBottomWidth: 1, borderBottomColor: NAMED_COLORS.e6e6e6, justifyContent: 'center', paddingHorizontal: 15, paddingVertical: 15 }}><Text style={{ fontFamily: fonts.esp_light, lineHeight: 20, color: NAMED_COLORS.black, fontSize: 13 }}>{item.question}</Text></View></TouchableOpacity>
          <Animated.View style={{ display: this.state.activeTab == item.id ? 'flex' : 'none', borderBottomWidth: 1, borderBottomColor: NAMED_COLORS.e6e6e6, justifyContent: 'center', paddingHorizontal: 25, paddingVertical: 30 }}><Text style={{ fontFamily: fonts.esp_light, lineHeight: 20, color: NAMED_COLORS.black, fontSize: 13 }}>{item.answer}</Text></Animated.View>
        </View>
      )
    })
  }
  _renerListContainer() {
    if (this.state.loading)
      return <Spinner size={"large"} backgroundColor={NAMED_COLORS.white} />
    return (
      <ScrollView style={{ marginTop: 20, borderTopColor: NAMED_COLORS.e6e6e6, borderTopWidth: 1 }}>
        {this._renderList()}
      </ScrollView>
    )
  }
  componentDidMount() {
    this.setState({ loading: true })
    getFAQs().then(faqs => {
      this.setState({ faqs: faqs, loading: false })
    })
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: NAMED_COLORS.white }}>
        <View style={{ backgroundColor: BG_COLOR, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', height: 60 }}>
          <View></View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontFamily: fonts.esp_light, color: 'white' }}>FAQ</Text></View>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center'}}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="uniF15D" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: NAMED_COLORS.faqheaderColor }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
            <View>
              <Grayscale>
                <Image source={require('../../assets/www/dist/img/avatar1.png')} style={{ height: 70, width: 70, borderRadius: 100 }} />
              </Grayscale>
              <Text style={{ fontFamily: fonts.esp_light, color: 'white', marginTop: 25, textAlign: 'center' }}>Yarishna</Text>
            </View>

            <View>
              <Grayscale>
                <Image source={require('../../assets/www/dist/img/avatar2.png')} style={{ height: 70, width: 70, borderRadius: 100 }} />
              </Grayscale>
              <Text style={{ fontFamily: fonts.esp_light, color: 'white', marginTop: 25, textAlign: 'center' }}>Luisa</Text>
            </View>

            <View>
              <Grayscale>
                <Image source={require('../../assets/www/dist/img/avatar3.png')} style={{ height: 70, width: 70, borderRadius: 100 }} />
              </Grayscale>
              <Text style={{ fontFamily: fonts.esp_light, color: 'white', marginTop: 25, textAlign: 'center' }}>Alex</Text>
            </View>

            <View>
              <Grayscale>
                <Image source={require('../../assets/www/dist/img/avatar4.png')} style={{ height: 70, width: 70, borderRadius: 100 }} />
              </Grayscale>
              <Text style={{ fontFamily: fonts.esp_light, color: 'white', marginTop: 25, textAlign: 'center' }}>Giovanny</Text>
            </View>
          </View>

          <View style={{ margin: 25, marginBottom: 8, borderBottomColor: NAMED_COLORS.white, borderBottomWidth: 1, paddingBottom: 10 }}>
            <Text style={{ fontFamily: fonts.esp_extraLight, lineHeight: 20, color: 'white', textAlign: 'center' }}>Estamos qui para responder tus inquietudes acerca de InfluenceME escribenos</Text>
          </View>
        </View>
        {this._renerListContainer()}
      </View>
    )
  }
}
export default (FAQScreen)