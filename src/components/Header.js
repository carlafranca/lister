import React from "react";
import TextInput from "./common/TextInput";

const Header = ({ title, onSubmit, orgName, onChange }) => {
  return (
    <header className="header fixed">
      <div className="container">
        <h1 className="title">{title}</h1>
        <form className="form" onSubmit={onSubmit}>
          <TextInput
            name="search"
            label="Search User"
            value={orgName}
            onChange={onChange}
            placeholder="Search Users/Orgs"
          />
          <input type="Submit" value="Search" />
        </form>
      </div>
    </header>
  );
};

export default Header;
