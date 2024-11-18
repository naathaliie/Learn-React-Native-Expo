import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatApp from "./components/catApp/CatApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Header />
      </View>
      <View style={styles.mainContent}>
        <CatApp />
      </View>
      <View style={styles.footerContent}>
        <Footer />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    height: 200,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  footerContent: {
    height: 70,
  },
});
