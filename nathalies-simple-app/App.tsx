import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatApp from "./components/catApp/CatApp";

export default function App() {
  return (
    <View style={styles.container}>
      <CatApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 60,
  },
});
