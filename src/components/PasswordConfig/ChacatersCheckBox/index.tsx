import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  checkBoxValue: boolean;
  onChange: (val: boolean) => void;
};

const CharactersCheckBox = ({ label, checkBoxValue, onChange }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checkBoxValue)}
    >
      <View style={[styles.box, checkBoxValue && { backgroundColor: "#8A2BE2" }]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CharactersCheckBox;
