import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import moment from 'moment';
const logo = require('../assets/logo.png');
const profile = require('../assets/profile_icon.png');
const setting = require('../assets/setting_icon.png');
const report = require('../assets/report_icon.png');
const loc = require('../assets/location_icon.png');

export default DriverDash = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const blankSpace = ' ';
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>UniWay</Text>
          <Image source={report} style={styles.logo2} />
        </View>
        <View style={styles.lineBreak} />
        <ScrollView>
          <View style={styles.welcome}>
            <Text style={styles.hello}>Hello, </Text>
            <Text style={styles.name}>Ramesh Kumar</Text>
          </View>
          <Text style={styles.college}>Manipal University Jaipur</Text>
          <View style={styles.car}>
            <View style={styles.span}>
              <Text style={styles.key}>Car Model:{blankSpace}</Text>
              <Text style={styles.value}>Tavera</Text>
            </View>
            <View style={styles.span}>
              <Text style={styles.key}>Car Number: {blankSpace}</Text>
              <Text style={styles.value}>RJ14 EL 6675</Text>
            </View>
          </View>
          <View style={styles.events}>
            <View style={styles.eventsHead}>
              <Text style={styles.eventsHeadText}>Upcoming Events </Text>
            </View>
            <View style={styles.eventsBody}>
              <Pressable
                style={styles.eventsList}
                onPress={() => {
                  navigation.navigate('DriverMorning');
                }}
              >
                <View style={styles.eventIconWrapper}>
                  <Image source={loc} style={styles.eventIcon} />
                </View>
                <View style={styles.eventsListBody}>
                  <Text style={styles.eventsListBodyHeadText}>
                    Morning Pickup
                  </Text>
                  <Text style={styles.eventsListBodyText}>
                    Tue, Apr 9, 06:00hrs
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.eventsList}
                onPress={() => {
                  alert('Driver DropOff will be available soon!!!');
                }}
              >
                <View style={styles.eventIconWrapper}>
                  <Image source={loc} style={styles.eventIcon} />
                </View>
                <View style={styles.eventsListBody}>
                  <Text style={styles.eventsListBodyHeadText}>
                    Afternoon Drop Off
                  </Text>
                  <Text style={styles.eventsListBodyText}>
                    Mon, Apr 8, 15:00hrs
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={(styles.footerWrapper, { paddingBottom: insets.bottom })}>
        <View style={styles.lineBreak2} />
        <View style={styles.footer}>
          <Image source={profile} style={{ height: 40, width: 40 }} />
          <Image source={setting} style={{ height: 40, width: 40 }} />
        </View>
      </View>
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
    paddingHorizontal: 12,
  },
  logo: {
    height: 70,
    width: 70,
  },
  logo2: {
    height: 43,
    width: 43,
    alignSelf: 'center',
    marginRight: 8,
    marginLeft: 0,
  },
  headerText: {
    fontSize: 30,
    paddingTop: 2,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  lineBreak: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: -50,
    shadowOffset: { height: 2.7, width: 0 },
    shadowOpacity: 8,
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    paddingHorizontal: 30,
  },
  hello: {
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  college: {
    paddingHorizontal: 30,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  car: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  span: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'flex-end',
  },
  key: {
    fontSize: 17,
    fontWeight: '600',
  },
  value: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: -2,
  },
  lineBreak2: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 40,
    shadowOffset: { height: -2.7, width: 0 },
    shadowOpacity: 8,
  },
  footerWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 25,
  },
  events: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 17,
  },
  eventsHead: {
    backgroundColor: '#ffed85',
    padding: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  eventsHeadText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  eventsBody: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff8d0',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  eventsList: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  eventIcon: {
    height: 50,
    width: 50,
  },
  eventIconWrapper: {
    backgroundColor: '#f5f5f5',
    shadowOffset: { height: 2.5, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderRadius: 10,
  },
  eventsListBody: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  eventsListBodyHeadText: {
    fontSize: 16,
    fontWeight: '600',
  },
  eventsListBodyText: {
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.45,
    paddingTop: 2.7,
  },
});
