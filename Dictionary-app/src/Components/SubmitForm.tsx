import { useState } from "react";
import fetchQuery from "../utils/FetchDefs";

export const SubmitForm = () => {
    const [newQuery, setNewQuery] = useState("")


const onSubmit = async (event: React.FormEvent) => {
event.preventDefault()
  const data = await fetchQuery(newQuery)
    console.log(data)
}

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
    </>
  );
};
