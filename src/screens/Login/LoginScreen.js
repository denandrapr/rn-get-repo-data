import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {IcArrowRight} from '../../assets/icons';
import {COLORS} from '../../config';

import styles from './styles';

const componentName = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {!isPassword ? (
        <>
          <Text style={styles.textInput}>Username</Text>
          <TextInput
            style={styles.textInputStyle}
            value={username}
            onChangeText={val => setUsername(val)}
          />
        </>
      ) : (
        <>
          <Text style={styles.textInput}>Password</Text>
          <TextInput
            style={styles.textInputStyle}
            value={password}
            onChangeText={val => setPassword(val)}
          />
        </>
      )}
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => {
          if (isPassword) {
            navigation.navigate('HomeScreen');
          } else {
            setIsPassword(true);
          }
        }}>
        <IcArrowRight
          width={24}
          height={24}
          color={COLORS.black70}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default componentName;
