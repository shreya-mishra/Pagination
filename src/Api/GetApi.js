const URL = "https://jsonplaceholder.typicode.com/todos";

const data = async () => {
  const result = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
  return result;
};
export default data;
