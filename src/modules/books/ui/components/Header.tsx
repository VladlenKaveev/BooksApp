import {Dimensions, StyleSheet, View} from 'react-native';
import {Label} from 'native-base';
import React from 'react';

const height = Dimensions.get('window').height;

export const Header = ({name}) => {
  return (
    <View style={styles.header}>
      <Label style={styles.label}>{name}</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D55E5E',
    height: height / 6,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 19,
    alignSelf: 'center',
    fontFamily: 'CircularStd-Bold',
    color: 'white',
  },
});
