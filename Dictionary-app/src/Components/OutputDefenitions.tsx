export const OutputDefs = ({ newData }: { newData: Record<string, any>[] }) => {
  return (
    <section>
      {newData.map((definition, i) => (
        <>
          <p>
            <strong>Word: </strong> {definition.word}
          </p>
          <p key={i}>
            <strong>Meaning: </strong>
            {definition.meaning}
          </p>
        </>
      ))}
    </section>
  );
};
