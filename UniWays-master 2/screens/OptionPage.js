import { StyleSheet, Text, View, Pressable } from 'react-native';

export default OptionPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>UniWay</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => {
          navigation.navigate('LogIn');
        }}
      >
        <Text style={styles.body}>student</Text>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => {
          navigation.navigate('DriverDash');
        }}
      >
        <Text style={styles.body}>driver</Text>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => {
          alert('Owner Dashboard will be available soon!!!');
        }}
      >
        <Text style={styles.body}>owner</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    letterSpacing: 2,
  },
  wrapper: {
    width: 270,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd601',
  },
  body: {
    fontSize: 20,
    fontWeight: 'bold',
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 0.1,
  },
});
