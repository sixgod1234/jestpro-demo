import React from 'react';
 
function ExampleTwo() {
  const [search, setSearch] = React.useState('');
 
  function handleChange(event) {
    setSearch(event.target.value);
  }
 
  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
 
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}
 
function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder='test'
      />
    </div>
  );
}
 
export default ExampleTwo;