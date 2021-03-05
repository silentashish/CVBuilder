import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';

export default (props) => {
  const {navigation} = props;
  return (
    <ImageBackground
      source={require('../../assets/Images/background.jpg')}
      style={styles.mainView}>
      <View style={styles.secondView}>
        <View style={styles.centerElement}>
          <View>
            <Text style={[styles.bigText, {color: secondaryColor}]}>
              CV Maker
            </Text>
            <Divider />
            <Text style={styles.instruction}>
              Create your CV and resume with CVMaker easy and quick
            </Text>
          </View>

          <View style={styles.animationBox}>
            <LottieView
              source={require('../../assets/Animations/astro.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>

          <Button onPress={() => navigation.navigate('CardScreen')}>
            Start Creating
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
