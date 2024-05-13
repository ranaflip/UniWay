import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const logo = require('../assets/logo.png');

export default SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [regno, setRegno] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [address, setAddress] = useState('');

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
      <ScrollView>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50}>
          <TextInput
            style={styles.input}
            placeholder='name'
            onChangeText={setName}
            value={name}
            clearButtonMode='always'
          />
          <TextInput
            style={styles.input}
            placeholder='registration number'
            onChangeText={setRegno}
            value={regno}
            clearButtonMode='always'
          />
          <TextInput
            style={styles.input}
            placeholder='phone number'
            keyboardType='phone-pad'
            onChangeText={setPhno}
            value={phno}
            clearButtonMode='always'
          />
          <TextInput
            style={styles.input}
            placeholder='email'
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
            clearButtonMode='always'
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            onChangeText={setPassw}
            value={passw}
            clearButtonMode='always'
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder='address'
            onChangeText={setAddress}
            value={address}
            clearButtonMode='always'
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <Pressable
        onPress={() => {
          alert('Login Successful');
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>sign up</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('LogIn');
        }}
      >
        <Text style={styles.footer}>already registered with us?</Text>
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
    height: 200,
    width: 200,
    marginTop: 25,
    marginBottom: 25,
    paddingBottom: 20,
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
    marginTop: 37,
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
  footer: {
    opacity: 0.5,
    alignSelf: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
