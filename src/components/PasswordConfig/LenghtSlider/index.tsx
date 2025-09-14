import { Text } from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from './styles';
import { Props } from './props';

const LenghtSlider = ({sliderValue, onChange}: Props) => {
    return (
        <>
                       <Text style={{ color: "#FF3CAC", fontWeight: "bold" }}>
              Current Value: {sliderValue}
            </Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={8}
                maximumValue={32}
                minimumTrackTintColor="#df46beff"
                maximumTrackTintColor="#000000"
                onValueChange={onChange}
                step={1}
                value={sliderValue}
            />
        </>
    );
};

export default LenghtSlider;