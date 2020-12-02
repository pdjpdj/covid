import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useReducer } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { fetchTotal } from '../api/covid19Data';
import { RootStackParamList } from '../App';
import PrimaryButton from '../components/PrimaryButton';
import Totals from '../components/Totals';
import { totalInitialState, totalReducer } from '../reducers/total';
import styles from '../styles/styles';

type HomeScreenProps = StackScreenProps<
  RootStackParamList, 
  'Home'>;

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const [state, dispatch] = useReducer(totalReducer, totalInitialState);

  const {loading, totals, error } = state;

  useEffect(() => {
    fetchTotal(dispatch);
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
        <Text style={styles.title}>Global totals</Text> 
      </View>
      <Totals totals={totals} />
      <PrimaryButton
        text='Search countries'
        onPressItem={() => navigation.push('Countries')} />
    </View>
  );
}

export default HomeScreen;