import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Divider} from '.';
import {primaryColor} from '../Utils';

const HomeGrid = (props) => {
  const {userImage, name, bio} = props;

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.heading}>{name}</Text>
        <Divider small />
        <Text style={styles.details}>{bio}</Text>
      </View>
      <Image source={{uri: userImage}} style={styles.image} />
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
    justifyContent: 'space-between',
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
