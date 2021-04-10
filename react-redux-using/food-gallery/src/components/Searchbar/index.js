const Searchbar = ({ value, onChange, onClick }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <input
        type="text"
        placeholder="garlic,onion,..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <i
        onClick={(e) => onClick(e)}
        className="fas fa-search fa-2x btn btn-search"
      ></i>
    </form>
  );
};

export default Searchbar;
