import React from 'react';
import {Text, View} from 'react-native';
import {TotalItem} from '../reducers/total';
import styles from '../styles/styles';

interface TotalsProps {
  totals: TotalItem | undefined;
}

function Totals({totals}: TotalsProps) {

  if (!totals) {
    return (
      <View style={styles.totals}>
        <View style={styles.container}>
          <Text style={styles.error}>No data for this country</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.totals}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.tableTitle}>Today</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}>
          <Text>Confirmed:</Text>
          <Text>{totals?.NewConfirmed.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text>Deaths:</Text>
          <Text>{totals.NewDeaths.toLocaleString()}</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}>
          <Text>Recovered:</Text>
          <Text>{totals?.NewRecovered.toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.tableTitle}>All time</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}>
          <Text>Confirmed:</Text>
          <Text>{totals?.TotalConfirmed.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text>Deaths:</Text>
          <Text>{totals.TotalDeaths.toLocaleString()}</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}>
          <Text>Recovered:</Text>
          <Text>{totals?.TotalRecovered.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
}

export default Totals;
