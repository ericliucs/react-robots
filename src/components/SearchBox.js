function SearchBox({ onSearchChange }) {
  return (
    <div className="pa2">
      <input className="pa2 ba b--gray" type="search" placeholder="Search robots" onChange={onSearchChange}/>
    </div>
  );
}

export default SearchBox;
