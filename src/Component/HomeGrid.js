import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Divider} from '.';
import {primaryColor} from '../Utils';

const HomeGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.heading}>Ashish Check Message</Text>
        <Divider small />
        <Text style={styles.details}>Ashish Check Message</Text>
      </View>
      <Image
        source={require('../assets/Images/background.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: primaryColor,
  },
  details: {
    fontWeight: 'normal',
    fontSize: 15,
    color: primaryColor,
  },
  image: {
    height: 150,
    width: 150,
  },
  information: {
    paddingVertical: 15,
  },
});

export {HomeGrid};
