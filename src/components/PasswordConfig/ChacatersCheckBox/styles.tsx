import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",   // centraliza verticalmente o texto com a box
    marginRight: 15,        // espaço entre um checkbox e outro dentro da row
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#8A2BE2",
    backgroundColor: "#1A1A2E",
  },
  label: {
    marginLeft: 6,          // aproxima o texto da box
    fontSize: 16,
    color: "#FF3CAC",
  },
});
