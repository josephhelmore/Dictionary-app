import { useState } from "react";
import { fetchQuery, fetchRandom } from "../utils/FetchDefs";

type SubmitFormProps = {
  setNewData: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
};

export const SubmitForm = ({ setNewData }: SubmitFormProps) => {
  const [newQuery, setNewQuery] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [placeholder, setPlaceholder] = useState("Phrase or word");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newQuery.length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    const data = await fetchQuery(newQuery);
    setNewData(data.data);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col text-center text-white font-mono justify-center bg-slate-600 m-8 rounded-lg py-8 shadow-xl/30"
      >
        <input
          value={newQuery}
          onChange={(event) => {
            setNewQuery(event.target.value);
            setIsValid(true);
          }}
          placeholder={placeholder}
          onFocus={() => setPlaceholder("")}
          id="text-area"
          className={`bg-slate-400 border-2 rounded-xl h-25 mx-8 text-center 
      ${isValid ? "border-slate-500" : "border-red-500"}`}
        />
        <button
          type="submit"
          className="bg-slate-300 rounded-xl h-10 mx-8 mt-8 text-center text-black active:bg-slate-500"
        >
          Ask
        </button>
              <button
        type="button"
        onClick={async () => {
          const data = await fetchRandom();
          setNewData(data.data);
        }}
       className="bg-slate-300 rounded-xl h-10 mx-8 mt-8 text-center text-black active:bg-slate-500"
      >
        I'm Feeling Lucky
      </button>
      </form>

    </>
  );
};
