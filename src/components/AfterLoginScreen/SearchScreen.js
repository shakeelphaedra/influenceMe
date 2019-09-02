import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TopSearchNavigation from '../../navigations/TopSearchNavigation';
import Icon from '../common/Icon';
import { BG_COLOR } from '../../styles';
import { Field, reduxForm } from 'redux-form'
import { NAMED_COLORS } from '../../common/AppColors';
import SearchInput from '../../common/SearchInput';

class SearchScreen extends Component {
  defaultNavigationOptions = {
    header: null,
  }
  header = null
  state = {
    search: ''
  }

  static router = {
    ...TopSearchNavigation.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return TopSearchNavigation.router.getStateForAction(action, lastState);
    },
  };
  render() {
    const { handleSubmit, _handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ backgroundColor: BG_COLOR, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', height: 60 }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="uniF15D" color="white" size={30} />
          </TouchableOpacity>
          <Field
            name='search'
            value={this.props.search}
            component={SearchInput}
            onChangeText={handleSubmit(_handleSubmit)}
            customInputStyle={{ color: NAMED_COLORS.white, }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="uniF221" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <TopSearchNavigation screenProps={this.props} influencers={this.props.influencers} plans={this.props.plans} navigation={this.props.navigation} />
      </View>
    )
  }
}
export default (reduxForm({
  form: 'Search',
  enableReinitialize: true,
})(SearchScreen))