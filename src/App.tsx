/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import CountriesScreen from './screens/Countries';
import CountryScreen from './screens/Country';
import {CountryItem} from './reducers/countries';

export type RootStackParamList = {
  Home: undefined;
  Countries: undefined;
  Country: {country: CountryItem};
};

const Root = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {
        <Root.Navigator>
          <Root.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Covid-19',
            }}
          />
          <Root.Screen
            name="Countries"
            component={CountriesScreen}
            options={{
              title: 'Search',
            }}
          />
          <Root.Screen
            name="Country"
            component={CountryScreen}
            options={{
              title: 'Country',
            }}
          />
        </Root.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;
