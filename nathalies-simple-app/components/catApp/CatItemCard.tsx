import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import { oneCat } from "../../types";
import { useRef, useState } from "react";

type CatCardItemProps = {
  oneCat: oneCat;
  feedCat: Function;
  deleteCat: Function;
};

const CatItemCard = ({ oneCat, feedCat, deleteCat }: CatCardItemProps) => {
  const pan = useRef(new Animated.ValueXY()).current; // För att hålla koll på swipe-rörelsen
  const [swiped, setSwiped] = useState(false); // Håller koll på om kortet har svepts långt nog

  // Skapa PanResponder för att fånga rörelser
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null, // Vi ignorerar y-riktningen
        { dx: pan.x }, // Koppla x-rörelsen till pan.x
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      const { dx } = gestureState;

      if (dx > 120) {
        setSwiped(true);
        feedCat(oneCat.id); // Mata katten om sveps åt höger
      } else if (dx < -120) {
        setSwiped(true);
        deleteCat(oneCat.id); // Radera katten om sveps åt vänster
      }

      // Återställ positionen på kortet om ingen åtgärd tas
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <Animated.View
      key={oneCat.id}
      {...panResponder.panHandlers} // Lägg till PanResponder för swipe
      style={[
        styles.savedCatItem,
        {
          transform: [{ translateX: pan.x }], // Använd animerad värde för att flytta kortet
        },
      ]}
    >
      <View style={styles.feedBox}>
        <Text>Fått mat? {oneCat.hasBeenFed ? "😍" : "🙁"}</Text>
        <Pressable
          style={styles.feedBtn}
          onPress={() => {
            feedCat(oneCat.id);
          }}
        >
          <Text style={styles.feedText}>Ge 🐠</Text>
        </Pressable>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Namn: {oneCat.name}</Text>
        <Text style={styles.infoText}>Älder: {oneCat.age}</Text>
        <Text> unikt-id: {oneCat.id}</Text>
      </View>
      <Pressable
        style={styles.deletebtn}
        onPress={() => {
          deleteCat(oneCat.id);
        }}
      >
        <Text>❌</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  savedCatItem: {
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
});

export default CatItemCard;
