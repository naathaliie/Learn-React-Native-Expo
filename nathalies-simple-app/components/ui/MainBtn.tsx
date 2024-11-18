import { transform } from "@babel/core";
import { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Animated } from "react-native";

type MainBtnProps = {
  title: string;
  colorBackground: string;
  placement?: "left" | "center" | "right"; //placering av knappen
  onClickFunction?: () => void;
};

const MainBtn = ({
  title,
  colorBackground,
  placement,
  onClickFunction,
}: MainBtnProps) => {
  // Skapa en Animated.Value som styr skalan på knappen
  const [scale] = useState(new Animated.Value(1));

  //Switch-case för att sätta placeringen av kknappen baserat på propsen
  const placementOfBtn = () => {
    switch (placement) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  // Funktion för att animera knappen
  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9, // Skala ner knappen till 90% av originalstorleken
      friction: 1, // Minskar studsen
      useNativeDriver: true, // Aktiverar native driver för bättre prestanda
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Återställ knappen till originalstorlek
      friction: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale }],
        },
        styles.mainBtn,
        { backgroundColor: colorBackground, alignSelf: placementOfBtn() },
      ]}
    >
      <TouchableOpacity
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onClickFunction}
      >
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  mainBtn: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default MainBtn;
