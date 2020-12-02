import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { CountryItem } from '../reducers/countries';
// import styles from '../styles/styles';

interface CountryMapProps {
  country: CountryItem;
}


function CountryMap({country}: CountryMapProps) {
  const lat = Number(country.latitude);
  const lon = Number(country.longitude);


  console.log(country);
  console.log(`Going to: (${lat} , ${lon})`);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 8,
          longitudeDelta: 4,
        }}
      >
        <Marker coordinate={{latitude: lat, longitude: lon}}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: Dimensions.get('window').width-34,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'slateblue',
    borderWidth: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
 });

export default CountryMap;