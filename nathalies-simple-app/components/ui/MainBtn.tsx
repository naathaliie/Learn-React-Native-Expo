import { View, Text, Pressable, StyleSheet } from "react-native";
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
    <Pressable
      style={[
        styles.mainBtn,
        { backgroundColor: colorBackground, alignSelf: placementOfBtn() },
      ]}
      onPress={onClickFunction}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
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
