import * as React from "react";
import "./search.css";
import debounce from "lodash.debounce";

interface SearchBarProps {
  setUpdateLocation: (value: string | null) => void;
}
function SearchBar(props: SearchBarProps) {
  const { setUpdateLocation } = props;

  const [city, setCity] = React.useState<string | null>(null);
  const handleChange: any = (e: any) => {
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  setCity(value);
  setUpdateLocation(value);
  };

  const debouncedResults = React.useMemo(() => {
    return debounce(handleChange, 2000);
  }, []);

  React.useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <>
      <input
        type="text"
        className="form-control border-0"
        placeholder="Search City"
        onChange={debouncedResults}
      />
      
      <div className="input-group-append">
        <button className="btn btn-secondary searchIcon border-0" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
}

export default SearchBar;

