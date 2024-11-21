import { useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { oneCat, savedCats } from "../../types";
import CatItemCard from "./CatItemCard";
import TouchableBtn from "../ui/TouchableBtn";

const CatApp = () => {
  const [textFromNameField, setTextFromNameField] = useState<string>("");
  const [textFromAgeField, setTextFromAgeField] = useState<
    string | undefined
  >();

  //Skapar upp en egen idGenerator som inte omställs vid varje rendering(lägg till/ta bort katt)
  const idGenerator = useRef(1007);

  //Alla sparade katter
  const [savedCats, setSavedCats] = useState<savedCats>([
    {
      id: 1001,
      name: "pussen",
      age: "2",
      hasBeenFed: false,
    },
    {
      id: 1002,
      name: "fluffis",
      age: "5",
      hasBeenFed: false,
    },
    {
      id: 1003,
      name: "nisse",
      age: "1",
      hasBeenFed: false,
    },
    {
      id: 1004,
      name: "gurkan",
      age: "2",
      hasBeenFed: false,
    },
    {
      id: 1005,
      name: "lilo",
      age: "5",
      hasBeenFed: false,
    },
    {
      id: 1006,
      name: "kompis",
      age: "1",
      hasBeenFed: false,
    },
  ]);

  function addCatToList() {
    if (textFromNameField !== "") {
      if (textFromAgeField !== undefined) {
        const newCat: oneCat = {
          id: idGenerator.current++,
          name: textFromNameField,
          age: textFromAgeField,
          hasBeenFed: false,
        };
        setSavedCats((prevCats) => {
          return [...prevCats, newCat];
        });
      } else {
        Alert.alert("Du måste fylla i kattens ålder");
      }
    } else {
      Alert.alert("Du måste fylla i kattens namn");
    }
    setTextFromNameField("");
    setTextFromAgeField(undefined);
  }

  function deleteCat(catId: number) {
    setSavedCats((prevCats) => {
      return prevCats.filter((cat) => cat.id !== catId);
    });
  }

  function feedCat(catId: number) {
    const updatedCatList = savedCats.map((cat) =>
      cat.id === catId ? { ...cat, hasBeenFed: !cat.hasBeenFed } : cat
    );
    setSavedCats(updatedCatList);
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputbox}>
              <Text>Namn:</Text>
              <TextInput
                placeholder="Skriv din katts namn"
                value={textFromNameField}
                onChangeText={(text) => {
                  setTextFromNameField(text);
                }}
                keyboardType="numbers-and-punctuation"
                style={styles.inputField}
              ></TextInput>
            </View>
            <View style={styles.inputbox}>
              <Text>Ålder:</Text>
              <TextInput
                placeholder="Skriv din katts ålder"
                value={textFromAgeField}
                onChangeText={(text: string) => {
                  setTextFromAgeField(text);
                }}
                keyboardType="numeric"
                style={styles.inputField}
              ></TextInput>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableBtn
          title="Lägg till katt"
          colorBackground="lightgreen"
          colorUnderlay="#ccffcc"
          placement="right"
          onClickFunction={addCatToList}
        />
      </View>

      <FlatList
        data={savedCats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CatItemCard oneCat={item} feedCat={feedCat} deleteCat={deleteCat} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "blue",
  },
  inputbox: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
  },
  addCatBtn: {
    borderWidth: 1,
    margin: 15,
    backgroundColor: "#99ff99",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 15,
  },
  listContainer: {
    gap: 10,
  },
  savedCatItem: {
    margin: 5,
    padding: 10,
    backgroundColor: "plum",
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  pressableRemove: {
    position: "absolute",
    top: 7,
    right: 10,
  },
  beenFed: {
    position: "absolute",
    top: 7,
    left: 10,
  },
  feedBtn: {
    borderWidth: 1,
    backgroundColor: "skyblue",
    padding: 7,
  },
  feedText: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default CatApp;
