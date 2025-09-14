import {TextInput } from 'react-native';

import { styles } from './styles';
import { Props } from './props';

export function Input(props : Props) {
  return (
      <TextInput
        style={styles.inputer}
        value={props.passValue}
      />
  );
}