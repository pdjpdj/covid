import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../styles/styles';

interface PrimaryButtonProps {
  text: string;
  onPressItem: () => void;
}

function PrimaryButton({text, onPressItem}: PrimaryButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.totals}>
      <View
        style={[
          styles.buttonContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: pressed ? 'mediumslateblue' : 'lightblue'},
        ]}>
        <TouchableHighlight
          underlayColor="mediumslateblue"
          onPress={() => onPressItem()}
          style={styles.buttonRow}
          onShowUnderlay={() => setPressed(true)}
          onHideUnderlay={() => setPressed(false)}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default PrimaryButton;
