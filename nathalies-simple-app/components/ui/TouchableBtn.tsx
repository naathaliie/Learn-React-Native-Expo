import { Text, TouchableHighlight, StyleSheet } from "react-native";

type TouchableBtnProps = {
  title: string;
  colorBackground: string;
  colorUnderlay: string;
  placement?: "left" | "center" | "right"; //placering av knappen
  onClickFunction?: () => void | Function;
};

const TouchableBtn = ({
  title,
  colorBackground,
  colorUnderlay,
  placement,
  onClickFunction,
}: TouchableBtnProps) => {
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

  return (
    <TouchableHighlight
      onPress={onClickFunction}
      style={[
        styles.touchableBtn,
        { backgroundColor: colorBackground, alignSelf: placementOfBtn() },
      ]}
      underlayColor={colorUnderlay} // Den färg som visas när knappen är tryckt
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchableBtn: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
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

export default TouchableBtn;
