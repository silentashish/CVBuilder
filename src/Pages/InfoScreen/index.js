import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {AppHeader, HomeGrid} from '../../Component';
import {primaryColor} from '../../Utils';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="About" />
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

export {InfoScreen};
