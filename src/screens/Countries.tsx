import React, {useEffect, useReducer, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {countriesInitialState, countriesReducer} from '../reducers/countries';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import CountriesList from '../components/CountriesList';
import {fetchCountries} from '../api/covid19Data';
import styles from '../styles/styles';

type CountriesScreenProps = StackScreenProps<RootStackParamList, 'Countries'>;

const CountriesScreen = ({navigation}: CountriesScreenProps) => {
  const [state, dispatch] = useReducer(countriesReducer, countriesInitialState);
  const [searchCountry, setSearchCountry] = useState('');

  const {loading, error, countries} = state;

  useEffect(() => {
    fetchCountries(dispatch);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>There's been an error!</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.countriesContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Countries</Text> 
      </View>
      <TextInput
        value={searchCountry}
        placeholder="Search Countries"
        onChangeText={(text) => setSearchCountry(text)}
        style={styles.input}
      />
      <CountriesList
        countries={countries?.filter(
          (country) => country.Country.indexOf(searchCountry) > -1,
        )}
        onPressItem={(country) =>
          navigation.push('Country', {country: country})
        }
      />
    </View>
  );
};

export default CountriesScreen;
