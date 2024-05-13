import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const logo = require('../assets/logo.png');

export default LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <View
      style={
        (styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom })
      }
    >
      <Text style={styles.header}>UniWay</Text>
      <Image source={logo} style={styles.logo} />
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50}>
        {/* <ScrollView> */}
        <TextInput
          style={styles.input}
          placeholder='email'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
          clearButtonMode='always'
        />
        {/* <View style={{ height: 17 }}></View> */}
        <TextInput
          style={styles.input}
          placeholder='password'
          onChangeText={setPassw}
          value={passw}
          clearButtonMode='always'
          secureTextEntry
        />
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
      <Pressable
        onPress={() => {
          navigation.navigate('StudDash');
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>log in</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Text style={styles.signup}>not registered with us?</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          alert('Redirect to forget pass');
        }}
      >
        <Text style={styles.footer}>forgot password?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 20,
    fontSize: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  logo: {
    height: 325,
    width: 325,
    marginTop: 25,
    marginBottom: 45,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#f5f5f5',
    height: 40,
    borderRadius: 30,
    marginHorizontal: 25,
    marginBottom: 17,
    padding: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
  },
  button: {
    justifyContent: 'center',
    height: 40,
    marginTop: 17,
    marginBottom: 17,
    width: 100,
    // backgroundColor: '#fee900',
    backgroundColor: '#00c8ff',
    borderRadius: 50,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  signup: {
    marginBottom: 80,
    opacity: 0.5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  footer: {
    opacity: 0.5,
    alignSelf: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
