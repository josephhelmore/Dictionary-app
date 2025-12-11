const fetchQuery = async (query: String) => {
  console.log(query, "<<<<<query");
  const response = await fetch(
    `https://unofficialurbandictionaryapi.com/api/search?term=${query}&`
  );
  const data = await response.json();

  console.log(data.data);
  return data;
};

export default fetchQuery;
