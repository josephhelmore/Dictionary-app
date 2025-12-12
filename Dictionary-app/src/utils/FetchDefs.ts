const fetchQuery = async (query: String) => {
  const response = await fetch(
    `https://unofficialurbandictionaryapi.com/api/search?term=${query}&`
  );
  const data = await response.json();
  return data;
};

export default fetchQuery;
