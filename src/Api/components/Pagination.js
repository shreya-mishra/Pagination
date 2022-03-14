import { View, Button } from "react-native";

const Pagination = ({
  isPrevDisabled,
  isNextDisabled,
  onPrevClicked,
  onNextClicked
}) => {
  return (
    <View
      style={{
        diaplay: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        marginTop: 30
      }}
    >
      <Button disabled={isPrevDisabled} title="Prev" onPress={onPrevClicked} />
      <Button disabled={isNextDisabled} title="Next" onPress={onNextClicked} />
    </View>
  );
};

export default Pagination;
