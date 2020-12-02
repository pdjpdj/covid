import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { CountryItem } from '../reducers/countries';
import styles from '../styles/styles';

interface CountriesListProps {
  countries: CountryItem[] | undefined,
  onPressItem: (country: CountryItem) => void;
}

function CountriesList({countries, onPressItem}: CountriesListProps) {

  if (!countries || countries.length === 0) {
    return (
      <View style={styles.totals}>
        <View style={styles.container}>
          <Text style={styles.error}>No countries</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.listTotals}>
      <View style={styles.listContainer}>
        <FlatList 
          data={countries.sort((a, b) => (a.Country > b.Country ? 1 : -1)) }
          keyExtractor={(country) => country.ISO2}
          style={styles.list}
            renderItem={({item, index}) => (
            <View key={item.ISO2}>
              <TouchableHighlight
                underlayColor='mediumslateblue'
                onPress={() => onPressItem(item)}
                style={{backgroundColor: index%2 ? 'lightskyblue' : 'lightblue'}}
              >
                <View style={styles.listRow}>
                  <Text style={styles.countryText}>{item.Country}</Text>
                  <Image
                    style={styles.flag}
                    source={{uri: `https://ipworld.info/static/flags/${item.ISO2 ? item.ISO2.toLowerCase() : ''}.png`}}
                  />
                </View>
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default CountriesList;
