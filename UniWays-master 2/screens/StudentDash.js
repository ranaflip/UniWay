import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Switch,
  ScrollView,
  Linking,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const logo = require('../assets/logo.png');
const profile = require('../assets/profile_icon.png');
const setting = require('../assets/setting_icon.png');
const report = require('../assets/report_icon.png');
const driver = require('../assets/driver.png');
const msg = require('../assets/message.png');
const phone = require('../assets/phone2.png');
const car = require('../assets/car.png');
import gmap from '../utils/gmap.json';

export default StudentDash = () => {
  const insets = useSafeAreaInsets();
  const blank = ' ';
  const [isEnabled, setIsEnabled] = useState(false);
  const [location, setLocation] = useState({
    latitude: 10,
    longitude: 10,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

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
            <Text style={styles.name}>Pratyush Srivastava</Text>
          </View>
          <Text style={styles.college}>Manipal University Jaipur</Text>
          <View style={styles.travelPref}>
            <Text style={styles.travelPrefText}>Are you travelling?</Text>
            <Switch
              style={styles.switch}
              value={isEnabled}
              onValueChange={toggleSwitch}
            ></Switch>
          </View>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsTraffic={true}
            customMapStyle={gmap}
          >
            <Marker coordinate={{ latitude: 26.843698, longitude: 75.567863 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 13, fontWeight: '400', opacity: 0.8 }}>
                  Rakesh Kumar
                </Text>
                <Image source={car} />
              </View>
            </Marker>
          </MapView>
        </ScrollView>
      </View>
      <View style={(styles.footerWrapper, { paddingBottom: insets.bottom })}>
        <View style={styles.driver}>
          <View style={styles.driverNameWrapper}>
            <Text style={styles.driverName}>Rakesh Kumar {blank}</Text>
            <Text style={styles.driverMisc}>is your driver today</Text>
          </View>
          <View style={styles.driverInfo}>
            <Image source={driver} style={styles.driverLogo} />
            <View
              style={{ flexDirection: 'column', justifyContent: 'flex-start' }}
            >
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                RJ14 EL 6675
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  opacity: 0.8,
                  marginTop: 4,
                }}
              >
                Tavera
              </Text>
            </View>
            <Pressable
              onPress={() => {
                Linking.openURL(`sms: 9336105078`);
              }}
            >
              <Image source={msg} />
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL(`tel: 9336105078`);
              }}
            >
              <Image source={phone} />
            </Pressable>
          </View>
        </View>
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
    marginTop: 20,
    paddingHorizontal: 30,
  },
  hello: {
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 26,
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
  travelPref: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 25,
    alignItems: 'center',
  },
  travelPrefText: {
    fontSize: 17,
    fontWeight: '500',
  },
  switch: {
    marginHorizontal: 8,
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  map: {
    height: 350,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  driver: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 140,
    shadowOffset: { height: -3 },
    shadowOpacity: 0.6,
    backgroundColor: '#f5f5f5',
  },
  driverName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  driverMisc: {
    fontSize: 15,
    paddingBottom: 1,
    fontWeight: '600',
  },
  driverNameWrapper: {
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 20,
    alignItems: 'flex-end',
  },
  driverLogo: {
    marginTop: -5,
    height: 70,
    width: 70,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
  },
  driverInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    marginTop: 5,
  },
  lineBreak2: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 0,
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
});
