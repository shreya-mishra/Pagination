import { Text, View } from "react-native";

const ListOfItems = ({ item }) => {
  console.log("item", item);
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15, margin: 10 }}>
        {item.title}
      </Text>
    </View>
  );
};

export default ListOfItems;
