import { View, FlatList } from "react-native";
import ListOfItems from "./ListOfItems";

const List = ({ result }) => {
  const renderFunction = ({ item }) => <ListOfItems item={item} />;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <FlatList
        data={result}
        renderItem={renderFunction}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default List;
