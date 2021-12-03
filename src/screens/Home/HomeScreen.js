import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {IcArrowRight} from '../../assets/icons';
import {COLORS} from '../../config';

import styles from './styles';

const componentName = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Repository Name</Text>
      <TextInput
        style={styles.textInputStyle}
        value={password}
        onChangeText={val => setPassword(val)}
      />
    </View>
  );
};

export default componentName;
