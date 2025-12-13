import { SubmitForm, OutputDefs } from "./index";
import { useState } from "react";

export const UserBody = () => {
const [newData, setNewData] = useState<Record<string, any>[]>([]);

  return (
    <section className="h-auto bg-slate-700 pb-8">
      <p className="flex text-center text-white font-mono justify-center bg-slate-600 m-8 rounded-lg py-8 shadow-xl/30 ">
        There must be a word or phrase that you have always wanted to know the
        meaning of... This is that time to find out.{" "}
      </p>
      <SubmitForm setNewData={setNewData} />
      <OutputDefs newData={newData} />
    </section>
  );
};
