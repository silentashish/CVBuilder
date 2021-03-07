import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {AppHeader, HomeGrid} from '../../Component';
import {primaryColor} from '../../Utils';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListingPage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const allData = await AsyncStorage.getItem('allData');
    if (allData) {
      setData(JSON.parse(allData));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Home" />
      <ScrollView>
        {data.map((item) => (
          <HomeGrid {...item} />
        ))}
        {data?.length === 0 && <Text style={styles.txt}>No Data Yet</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  txt: {
    color: 'white',
  },
});

export {ListingPage};
