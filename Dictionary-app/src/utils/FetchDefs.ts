export const fetchQuery = async (query: String) => {
  const response = await fetch(
    `https://unofficialurbandictionaryapi.com/api/search?term=${query}&`
  );
  const data = await response.json();
  return data;
};



export const fetchRandom = async () =>{
    const response = await fetch(`https://unofficialurbandictionaryapi.com/api/random`);
    const data = await response.json();
    return data;
}