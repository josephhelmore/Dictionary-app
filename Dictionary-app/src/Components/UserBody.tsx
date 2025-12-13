import { SubmitForm, OutputDefs } from "./index";
import { useState } from "react";

export const UserBody = () => {
const [newData, setNewData] = useState<Record<string, any>[]>([]);

  return (
    <section>
      <p className="bg-blue-200">
        There must be a word or phrase that you have always wanted to know the
        meaning of... This is that time to find out.{" "}
      </p>
      <SubmitForm setNewData={setNewData} />
      <OutputDefs newData={newData} />
    </section>
  );
};
