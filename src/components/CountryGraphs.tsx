import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { CountryTotalItem } from '../reducers/country';
import styles from '../styles/styles';
import { getData, pickerChoices } from '../utils/pickerChoices';

interface CountryGraphsProps {
  totals: CountryTotalItem[];
}

function CountryGraphs({totals}: CountryGraphsProps) {
  const [dataChoice, setDataChoice] = useState(pickerChoices[0].value);

  if (!totals) {
    return (
      <View style={styles.totals}>
      </View>
    );
  }

  const data = getData(totals, dataChoice);

  return (
    <View style={styles.totals}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get('window').width-34}
        height={320}
        yAxisInterval={1000}
        withDots={false}
        withVerticalLabels={false}
        chartConfig={{
          backgroundGradientFrom: '#add8e6',
          backgroundGradientTo: '#add8e6',
          decimalPlaces: 0,
          color: () => '#000',
          labelColor: () => '#000',
          strokeWidth: 1,
          style: {
            borderRadius: 8,
            borderColor: 'slateblue',
            borderWidth: 1,
          },
        }}
        bezier
        style={{
          marginBottom: 8,
          paddingBottom: -50,
          borderColor: 'slateblue',
          borderWidth: 1,
          borderRadius: 8,
        }}
      />
      <View style={[styles.listContainer, {height: 100}]}>
        <Picker
          selectedValue={dataChoice}
          style={{}}
          itemStyle={{color:'black', height: 100, fontSize: 14, fontWeight: '400'}}
          onValueChange={(value, index) => setDataChoice(value.toString())}>
            {pickerChoices.map(pickerItem => 
              <Picker.Item label={pickerItem.label} value={pickerItem.value} key={pickerItem.value}/>
            )}
        </Picker>
      </View>
    </View>
  );
}

export default CountryGraphs;