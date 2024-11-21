import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import { oneCat } from "../../types";

type CatCardItemProps = {
  oneCat: oneCat;
  feedCat: Function;
  deleteCat: Function;
};

const CatItemCard = ({ oneCat, feedCat, deleteCat }: CatCardItemProps) => {
  const translateX = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    /*     onMoveShouldSetPanResponder: () => true,
     */ onPanResponderMove: (e, gestureState) => {
      if (gestureState.dx < 0) {
        translateX.setValue(gestureState.dx);
      } else if (gestureState.dx > 0) {
        translateX.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx < -50) {
        Animated.spring(translateX, {
          toValue: -100,
          useNativeDriver: true,
        }).start();
      } else if (gestureState.dx > 50) {
        Animated.spring(translateX, {
          toValue: 100,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      key={oneCat.id}
      {...panResponder.panHandlers} // Lägg till PanResponder för swipe
      style={[
        styles.savedCatItem,
        { flex: 1, transform: [{ translateX: translateX }] },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          feedCat(oneCat.id);
        }}
        style={styles.feedButton}
      >
        <Text style={styles.feedButtonText}>Mata katten 🐠</Text>
      </TouchableOpacity>
      <View style={styles.feedBox}>
        <Text>Fått mat? {oneCat.hasBeenFed ? "😍" : "🙁"}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Namn: {oneCat.name}</Text>
        <Text style={styles.infoText}>Älder: {oneCat.age}</Text>
        <Text> unikt-id: {oneCat.id}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteCat(oneCat.id);
        }}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>Radera</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

{
  /* <Pressable
style={styles.deletebtn}
onPress={() => {
  deleteCat(oneCat.id);
}}
>
<Text>❌</Text>
</Pressable> */
}

const styles = StyleSheet.create({
  savedCatItem: {
    height: 100,
    margin: 5,
    padding: 10,
    backgroundColor: "rgba(255, 165, 0, 0.5)",
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feedBox: {},
  feedBtn: {
    borderWidth: 1,
    backgroundColor: "skyblue",
    padding: 7,
  },
  feedText: {
    textAlign: "center",
    fontSize: 20,
  },
  infoBox: {},
  deletebtn: {
    alignSelf: "flex-start",
  },
  infoText: {
    fontSize: 20,
  },
  deleteButton: {
    width: 100,
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -110,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  feedButton: {
    width: 100,
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: -110,
  },
  feedButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CatItemCard;
