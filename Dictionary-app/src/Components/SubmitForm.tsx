import { useState } from "react";
import {fetchQuery, fetchRandom} from "../utils/FetchDefs";



type SubmitFormProps = {
  setNewData: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
};

export const SubmitForm = ({setNewData}: SubmitFormProps) => {
  const [newQuery, setNewQuery] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await fetchQuery(newQuery)
    setNewData(data.data)
  };

  

  
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={newQuery}
          onChange={(event) => setNewQuery(event.target.value)}
          placeholder="Phrase or word"
          id="text-area"
          className="bg-blue-500"
        />
        <button type="submit" id="submit-button">
          Ask
        </button>
      </form>
<button
  type="button"
  onClick={async () => {
    const data = await fetchRandom();
    setNewData(data.data);
  }}
  className="bg-blue-100"
>
  I'm Feeling Lucky
</button>
    </>
  );
};
