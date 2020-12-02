import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useReducer} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {fetchCountryTotal} from '../api/covid19Data';
import {RootStackParamList} from '../App';
import CountryTotals from '../components/CountryTotals';
import CountryGraphs from '../components/CountryGraphs';
import {countryInitialState, countryReducer} from '../reducers/country';
import styles from '../styles/styles';
import {ScrollView} from 'react-native-gesture-handler';
import CountryMap from '../components/CountryMap';

type CountryScreenProps = StackScreenProps<RootStackParamList, 'Country'>;

const CountryScreen = ({route}: CountryScreenProps) => {
  const [state, dispatch] = useReducer(countryReducer, countryInitialState);

  const {loading, totals, error} = state;

  const code = route.params.country.ISO2;
  const slug = route.params.country.Slug;
  const country = route.params.country;

  useEffect(() => {
    fetchCountryTotal(slug, dispatch);
  }, [slug]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  if (error || !totals) {
    return (
      <View style={styles.center}>
        <Text>There's been an error!</Text>
      </View>
    );
  }

  if (totals.length === 0) {
    return (
      <View style={styles.countriesContainer}>
        <View style={styles.countryTitleContainer}>
          <Text style={styles.title}>{slug}</Text>
          <Image
            style={styles.flag}
            source={{
              uri: `https://ipworld.info/static/flags/${
                code ? code.toLowerCase() : ''
              }.png`,
            }}
          />
        </View>
        <CountryTotals totals={totals} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.countriesContainer}>
        <View style={styles.countryTitleContainer}>
          <Text style={styles.title}>{totals[0].Country}</Text> 
          <Image
            style={styles.flag}
            source={{
              uri: `https://ipworld.info/static/flags/${
                code ? code.toLowerCase() : ''
              }.png`,
            }}
          />
        </View>
        <CountryTotals totals={totals} />
        <CountryGraphs totals={totals} />
        <CountryMap country={country} />
      </View>
    </ScrollView>
  );
};

export default CountryScreen;
