import { SubmitForm } from "./SubmitForm";

export const UserBody = () => {
  return (
    <section>
      <p className="bg-blue-200">
        There must be a word or phrase that you have always wanted to know the
        meaning of... This is that time to find out.{" "}
      </p>
      <SubmitForm/>
    </section>
  );
};
