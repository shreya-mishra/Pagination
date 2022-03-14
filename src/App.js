import { useEffect, useState } from "react";
import { View } from "react-native";
import List from "./Api/components/List";
import Pagination from "./Api/components/Pagination";
import data from "./Api/GetApi";

const App = () => {
  const [result, setResult] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    data().then((res) => setResult(res));
  }, []);

  const getResultAccordingToPageNo = () => {
    return result.slice((pageNo - 1) * 10, pageNo * 10 + 1); // [1,2,3,4,5].splice(0,3) => [1,2,3]
  };

  return (
    <View>
      <List result={getResultAccordingToPageNo()} />

      <Pagination
        isPrevDisabled={pageNo === 1}
        isNextDisabled={pageNo === result.length / 10}
        onPrevClicked={() => {
          setPageNo((prev) => prev - 1);
        }}
        onNextClicked={() => {
          setPageNo((prev) => prev + 1);
        }}
      />
    </View>
  );
};

export default App;
