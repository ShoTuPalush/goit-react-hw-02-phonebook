import { Field, Text } from './Filte.styled';

export const Filter = ({ filter, onInput }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Field
        type="text"
        name="filter"
        value={filter}
        onChange={evt => onInput(evt.target)}
      />
    </>
  );
};
