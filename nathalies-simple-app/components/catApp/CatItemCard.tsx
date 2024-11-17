import { View, Text, Pressable, StyleSheet } from "react-native";
import { oneCat } from "../../types";

type CatCardItemProps = {
  oneCat: oneCat;
  feedCat: Function;
  deleteCat: Function;
};

const CatItemCard = ({ oneCat, feedCat, deleteCat }: CatCardItemProps) => {
  return (
    <View key={oneCat.id} style={styles.savedCatItem}>
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
    </View>
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
