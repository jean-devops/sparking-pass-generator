import React, { useState } from 'react';
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { Logo } from "../../components/Logo";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import CharactersCheckBox from '../../components/PasswordConfig/ChacatersCheckBox';
import LenghtSlider from '../../components/PasswordConfig/LenghtSlider';

import styles from './styles';

export default function Home() {
  const [pass, setPass] = useState('123@yUDa%$');
  const [isSliderValue, setSliderValue] = useState(14);

  // checkboxes
  const [useSpecials, setUseSpecials] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useUppers, setUseUppers] = useState(true);
  const [useLowers, setUseLowers] = useState(true);

  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <Input passValue={pass} onChange={setPass} />
      </View>

    <View style={styles.checkBoxGroup}>
  <View style={styles.row}>
    <View style={styles.checkboxItem}>
      <CharactersCheckBox
        label="Especiais"
        checkBoxValue={useSpecials}
        onChange={setUseSpecials}
      />
    </View>

    <View style={styles.checkboxItem}>
      <CharactersCheckBox
        label="Números"
        checkBoxValue={useNumbers}
        onChange={setUseNumbers}
      />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.checkboxItem}>
      <CharactersCheckBox
        label="Maiúsculas"
        checkBoxValue={useUppers}
        onChange={setUseUppers}
      />
    </View>

    <View style={styles.checkboxItem}>
      <CharactersCheckBox
        label="Minúsculas"
        checkBoxValue={useLowers}
        onChange={setUseLowers}
      />
    </View>
  </View>
</View>

      <LenghtSlider sliderValue={isSliderValue} onChange={setSliderValue} />

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <Button
          passValue={pass}
          onChange={setPass}
          length={isSliderValue}
          options={{
            specials: useSpecials,
            numbers: useNumbers,
            uppers: useUppers,
            lowers: useLowers,
          }}
        />
      </View>

      <StatusBar style="light" />
    </View>
  )
}