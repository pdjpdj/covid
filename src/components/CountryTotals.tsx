import React from 'react';
import { Text, View } from 'react-native';
import { CountryTotalItem } from '../reducers/country';
import styles from '../styles/styles';
import { formatMidDate } from '../utils/dateFormatter';

interface CountryTotalsProps {
  totals: CountryTotalItem[];
}

function CountryTotals({totals}: CountryTotalsProps) {

  if (!totals || totals.length === 0) {
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
          <Text style={styles.tableTitle}>Latest ({formatMidDate(new Date(totals[totals.length-1].Date))})</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}> 
          <Text>Confirmed:</Text>
          <Text>{(totals[totals.length-1].Confirmed - totals[totals.length-2].Confirmed).toLocaleString()}</Text>
        </View>
        <View style={styles.row}> 
          <Text>Deaths:</Text>
          <Text>{(totals[totals.length-1].Deaths - totals[totals.length-2].Deaths).toLocaleString()}</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}> 
          <Text>Recovered:</Text>
          <Text>{(totals[totals.length-1].Recovered - totals[totals.length-2].Recovered).toLocaleString()}</Text>
        </View>
        <View style={styles.row}> 
          <Text>Active:</Text>
          <Text>{(totals[totals.length-1].Active - totals[totals.length-2].Active).toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.row}> 
          <Text style={styles.tableTitle}>All time</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}> 
          <Text>Confirmed:</Text>
          <Text>{totals[totals.length-1].Confirmed.toLocaleString()}</Text>
        </View>
        <View style={styles.row}> 
          <Text>Deaths:</Text>
          <Text>{totals[totals.length-1].Deaths.toLocaleString()}</Text>
        </View>
        <View style={[styles.row, styles.rowAlternate]}> 
          <Text>Recovered:</Text>
          <Text>{totals[totals.length-1].Recovered.toLocaleString()}</Text>
        </View>
        <View style={styles.row}> 
          <Text>Active:</Text>
          <Text>{totals[totals.length-1].Active.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
}

export default CountryTotals;