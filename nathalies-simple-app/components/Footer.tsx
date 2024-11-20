import { View, Text, StyleSheet, Pressable } from "react-native";
import BouncyBtn from "./ui/BouncyBtn";
const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignSelf: "stretch",
    backgroundColor: "orange",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
export default Footer;
