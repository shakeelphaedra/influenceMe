import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from "react-native-modal";

export default class SearchableModalDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showkeyboardfield: false,
      countries: this.props.data
    }
  }
  selectCountry = country => {
    this.props.onChange(country);
  }
  filterData = (input) => {
    this.props.onFilter(input);
  }
  closeSearchableModal = () => {
    this.props.closeSearchableModal(this.props.label);
  }
  render() {
    return (
      <View >
        <Modal
          isVisible={this.props.isVisible}
          onBackButtonPress={() => this.closeSearchableModal()}
          onModalShow={() => { this.textInput.focus(); }}>
          <View style={styles.container}>
            <View style={{ position: 'relative' }}>
              {
                this.state.showkeyboardfield ?
                  <View style={styles.leftPadding}>
                    <TextField
                      ref={(input) => { this.textInput = input; }}
                      label={this.props.label}
                      value={this.props.selectedValue}
                      baseColor='#000'
                      tintColor='#000'
                      autoFocus
                      placeholder={this.props.placeholder}
                      labelTextStyle={color = 'black'}
                      onChangeText={(input) => this.filterData(input)}
                    />
                  </View> :
                  <TouchableOpacity onPress={() => this.setState({ showkeyboardfield: true })} style={styles.leftPadding}>
                    <Text style={{ fontSize: 12 }}>{this.props.label}</Text>
                    {this.props.selectedValue !== '' ?
                      <Text style={{ fontWeight: '300', borderBottomColor: '#ccc', borderBottomWidth: 0.5, paddingVertical: 5, fontSize: 16, marginRight: 10 }}>{this.props.selectedValue}</Text>
                      :
                      <Text style={{ fontWeight: '300', borderBottomColor: '#ccc', borderBottomWidth: 0.5, color: '#ccc', paddingVertical: 5, fontSize: 16, marginRight: 10 }}>{this.props.placeholder}</Text>
                    }
                  </TouchableOpacity>
              }
            </View>
            {
              this.props.label === 'Country' ?
                <FlatList
                  data={this.props.data}
                  extraData={this.props}
                  keyExtractor={(index) => index.value}
                  renderItem={({ item }) =>
                    <TouchableOpacity>
                      <Text onPress={() => this.selectCountry(item.value)} style={styles.item}>{item.value}</Text>
                    </TouchableOpacity>
                  }
                /> :
                <FlatList
                  data={this.props.data}
                  keyExtractor={(index) => index}
                  renderItem={({ item }) =>
                    <TouchableOpacity>
                      <Text onPress={() => this.selectCountry(item)} style={styles.item}>{item}</Text>
                    </TouchableOpacity>
                  }
                />
            }
            <View style={this.props.style}>
              <TouchableOpacity style={[styles.actionsText, styles.paddingRight]} onPress={() => this.closeSearchableModal()} style={[styles.socialLink, styles.paddingRight]}>
                <Text style={styles.actionsText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingTop: 22,
    backgroundColor: 'white',
    height: 300
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
  leftPadding: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 15
  },
  actionsText: {
    fontSize: 17,
    fontWeight: '500'
  }
})
