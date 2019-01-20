import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  render() {
    const location = 'Laguboti';
    return (
      // <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
            source={getImageForWeather('Clear')}
            style={styles.imageContainer}
            imageStyle={styles.image}
          >
          <Text style={[styles.largeText, styles.textStyle]}>
            {location}
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>
            Light Cloud
          </Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

          {/* <TextInput
              autoCorrect={false} placeholder="Search any city" 
              placeholderTextColor="white" style={styles.textInput} 
              clearButtonMode="always"
          /> */}
          <SearchInput placeholder = "tell me what city do you want"/>
        {/* </View> */}
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
},
  image : {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
  },
  warna : {
    color : 'red',
    // placeholder : 'test'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',

  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
},
});
