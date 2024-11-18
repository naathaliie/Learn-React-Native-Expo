import { View, Text, StyleSheet, Pressable } from "react-native";
import MainBtn from "./ui/MainBtn";
const Footer = () => {
  return (
    <View style={styles.container}>
      <MainBtn title="Mata Katt" colorBackground="skyblue" placement="center" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    borderWidth: 1,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "orange",
  },
});
export default Footer;
