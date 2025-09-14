import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './styles';
import batLogo from '../../../assets/logo.png';


export function Logo() {
  return (
    <>
      <Text style={styles.title}>
        SPARK PASS GENERATOR
      </Text>
      <Image
        source={batLogo}
        style={{
          resizeMode:'contain',
          height:180
        }}
      />
    </>
  );
}