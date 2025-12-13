export const OutputDefs = ({ newData }: { newData: Record<string, any>[] }) => {
  return (
    <section>
      {newData.map((definition, i) => (
        <div className="h-auto bg-slate-300 rounded-xl h-10 mx-8 p-2 mt-8 text-black active:bg-slate-500 ">
          <p>
            <strong>Word: </strong> {definition.word}
          </p>
          <p key={i}>
            <strong>Meaning: </strong>
            {definition.meaning}
          </p>
       
        </div>
      ))}
    </section>
  );
};
