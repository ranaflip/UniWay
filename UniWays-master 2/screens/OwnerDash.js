import { View, StyleSheet, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const logo = require('../assets/logo.png');

export default OwnerDash = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={
        (styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom })
      }
    >
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>UniWay</Text>
        <View style={{ height: 60, width: 60 }}></View>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.ownerName}>Vikas Kumar</Text>
      </View>
      <Text style={styles.college}>Manipal University, Jaipur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  logo: {
    height: 60,
    width: 60,
  },
  headerText: {
    fontSize: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  welcome: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 15,
  },
  hello: {
    fontSize: 30,
    alignSelf: 'flex-end',
    fontWeight: 400,
  },
  ownerName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
