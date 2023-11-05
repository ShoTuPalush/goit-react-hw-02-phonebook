export const Filter = ({ filter, onInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={evt => onInput(evt.target)}
      />
    </>
  );
};
