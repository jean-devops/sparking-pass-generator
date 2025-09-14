import React from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { Props } from './props';

import generatePass from '../../services/passwordService';

export function Button({ passValue, onChange, length, options }: Props) {

    function handleGenerateButton() {
        let generateToken = generatePass(length, options);
        onChange(generateToken);
    }

    function handleCopyButton() {
        if (passValue) {
            Clipboard.setStringAsync(passValue);
        }
    }

    return (
        <>
            <Pressable onPress={handleGenerateButton} style={styles.button}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable onPress={handleCopyButton} style={styles.button}>
                <Text style={styles.text}>⚡ COPY</Text>
            </Pressable>
        </>
    );

}