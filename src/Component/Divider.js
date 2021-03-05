import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default (props) => {
  const styles = _styles(props);
  const {children} = props;
  return <View style={styles.div}>{children}</View>;
};

const _styles = ({small, medium, large, backgroundColor}) => {
  return ScaledSheet.create({
    div: {
      height: small ? '4@ms' : medium ? '10@ms' : large ? '35@ms' : '15@ms',
      backgroundColor: backgroundColor ? backgroundColor : null,
    },
  });
};
