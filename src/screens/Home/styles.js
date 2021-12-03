import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black60,
    flex: 1,
    padding: 16,
  },
  textInputStyle: {
    backgroundColor: COLORS.whitePure,
    borderRadius: 10,
    padding: 8,
    marginTop: 16,
  },
  buttonNext: {
    marginTop: 32,
    backgroundColor: COLORS.whitePure,
    height: 64,
    width: 64,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  textInput: {
    color: COLORS.whitePure,
    fontSize: 16,
  },
});

export default styles;
