/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './LoginFormStyle';
import Logo from '../../images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginForm({navigation}) {
  const [account, setAccount] = React.useState({
    username: '',
    password: '',
  });
  const [userNameText, setUserNameText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const info = useSelector(state => state.personalInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(info);
  }, [info]);

  React.useEffect(() => {
    getTodosFromUserDevice();
    console.log('info', info);
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(account);
  }, [account]);

  // Use LocalStorage to save database
  const saveTodoToUserDevice = async account => {
    try {
      const stringifyTodos = JSON.stringify(account);
      await AsyncStorage.setItem('account', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  // Use LocalStorage to get database
  const getTodosFromUserDevice = async () => {
    try {
      const account = await AsyncStorage.getItem('account');
      if (account != null) {
        setAccount(JSON.parse(account));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView styles={styles.container}>
      <View styles={styles.content}>
        <Image style={styles.titleLogo} source={Logo} />

        {/*Input UserName */}
        <TextInput
          value={userNameText}
          style={styles.name}
          placeholder="UserName"
          onChangeText={e => {
            setAccount({...account, username: e});
            setUserNameText(e);
          }}
        />

        {/* Input Password */}
        <TextInput
          value={passwordText}
          style={styles.password}
          placeholder="Password"
          onChangeText={e => {
            setAccount({...account, password: e});
            setPasswordText(e);
          }}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Home');
            // dispatch(updateName(userNameText));
            // dispatch(updatePassword(passwordText));
            setUserNameText('');
            setPasswordText('');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Showing Account View */}
        <View style={styles.showAccount}>
          <Text>User Name: {account.username}</Text>
          <Text>Password: {account.password}</Text>
          {/* <Text>Password of info: {info.name}</Text> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}></View>
        </View>
      </View>
    </ScrollView>
  );
}
