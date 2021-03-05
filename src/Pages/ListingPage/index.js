import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppHeader} from '../../Component';
import {primaryColor} from '../../Utils';

const ListingPage = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

export {ListingPage};
