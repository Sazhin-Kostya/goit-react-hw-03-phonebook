export default function Filter({ changeFilter, value }) {
  return (
    <>
      <h3>Find contact by name</h3>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={evt => {
          changeFilter(evt.target.value);
        }}
        placeholder="Filter"
      />
    </>
  );
}
