import { View, Text, StyleSheet, Pressable } from "react-native";
import BouncyBtn from "./ui/BouncyBtn";
const Footer = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "orange",
  },
});
export default Footer;
