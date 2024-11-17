import { View, Text, ImageBackground, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/kittens.png")}
        style={styles.container}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {},
});

export default Header;
