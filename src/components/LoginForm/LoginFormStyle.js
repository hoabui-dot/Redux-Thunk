import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
  },
  titleLogo: {
    width: 150,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
    borderRadius: 100,
  },
  name: {
    fontSize: 14,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  password: {
    fontSize: 14,
    borderRadius: 5,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
  },
  loginButton: {
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#3B71F3',
    marginTop: 10,
    marginHorizontal: 20,
  },
  showAccount: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
