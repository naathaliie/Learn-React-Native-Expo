import { View, Text, StyleSheet, Pressable } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text>Mata katt</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 165, 0, 0.8)",
    padding: 10,
    flex: 1,
    borderWidth: 1,
    alignSelf: "center",
  },
  btn: {
    justifyContent: "center",
  },
});

export default Footer;
