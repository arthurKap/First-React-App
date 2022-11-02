import React from "react";

const SearchPanel = () => {
  const SearchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px",
  };
  return <input style={searchStyle} placeholder={SearchText} />;
};

export default SearchPanel;
