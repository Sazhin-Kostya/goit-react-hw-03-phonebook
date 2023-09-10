import { FilterTitle, FilterContainer, FilterInput } from './Filter.styled';

export default function Filter({ changeFilter, value }) {
  return (
    <>
      <FilterContainer>
        <FilterTitle>Find contact by name</FilterTitle>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={evt => {
            changeFilter(evt.target.value);
          }}
          placeholder="Filter"
        />
      </FilterContainer>
    </>
  );
}
