import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Switch,
  ScrollView,
  FlatList,
  Pressable,
  Linking,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const logo = require('../assets/logo.png');
const profile = require('../assets/profile_icon.png');
const setting = require('../assets/setting_icon.png');
const report = require('../assets/report_icon.png');
const phone = require('../assets/phone.png');
const marker = require('../assets/marker.png');
import gmap from '../utils/gmap.json';
import studentData from '../data/morningPickup.json';

export default DriverMorning = () => {
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

  const ListRender = ({ list }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 7,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 5 }}>
            {list.name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '600', opacity: 0.5 }}>
            {list.phone}
          </Text>
        </View>
        <Pressable
          style={{ alignSelf: 'center' }}
          onPress={() => {
            Linking.openURL(`tel:${list.phone}`);
          }}
        >
          <Image source={phone} style={{ width: 25, height: 25 }} />
        </Pressable>
      </View>
    );
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

        <ScrollView nestedScrollEnabled>
          <View style={styles.pickupInfo}>
            <Text style={styles.pickupInfoKey}>
              TODAY'S MORNING PICKUP:{blank}
            </Text>
            <Text style={styles.pickupInfoValue}>{blank}6:00 am</Text>
          </View>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation
            showsMyLocationButton
            showsTraffic
            customMapStyle={gmap}
            showsCompass
          >
            {studentData.map((item, index) => (
              <Marker
                key={index}
                title={item.name}
                coordinate={{
                  latitude: item.address.geo.lat,
                  longitude: item.address.geo.lng,
                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 13, fontWeight: '400', opacity: 0.8 }}
                  >
                    {item.name}
                  </Text>
                  <Image source={marker} style={{ height: 37, width: 37 }} />
                </View>
              </Marker>
            ))}
          </MapView>

          <FlatList
            nestedScrollEnabled
            data={studentData}
            renderItem={({ item }) => <ListRender list={item} />}
            ListHeaderComponent={
              <View style={styles.studentHead}>
                <Text style={styles.studentHeadText}>Students Travelling </Text>
              </View>
            }
            ItemSeparatorComponent={
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}
              />
            }
            style={styles.list}
          />
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
  pickupInfo: {
    paddingVertical: 20,
    paddingHorizontal: 17,
    flexDirection: 'row',
  },
  pickupInfoKey: {
    fontSize: 17,
  },
  pickupInfoValue: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  map: {
    height: 350,
    borderRadius: 15,
    borderWidth: 0.8,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  //   student: {
  //     // flex: 1,
  //   },
  studentHead: {
    backgroundColor: '#ffed85',
    height: 40,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    padding: 7,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  studentHeadText: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  list: {
    marginHorizontal: 15,
    margintop: 15,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    // borderWidth: 1,
  },
  lineBreak2: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 4,
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
