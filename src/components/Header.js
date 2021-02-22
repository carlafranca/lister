import React from "react";
import styled from "styled-components";
import TextInput from "./common/TextInput";

const Header = ({ title, onSubmit, orgRef }) => {
  return (
    <Wrapper>
      <HeadWrapper>
        <MainTitle>{title}</MainTitle>
        <SearchBarWrapper>
          <form onSubmit={onSubmit}>
            <TextInput
              name="search"
              label="Search User"
              orgRef={orgRef}
              placeholder="Search Users/Orgs"
            />
            <button type="submit">Search</button>
          </form>
        </SearchBarWrapper>
      </HeadWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  background-color: #23282e;
`;

const HeadWrapper = styled.header`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  margin: 0 auto 10px;
  @media (min-width: 610px) {
    margin: 0 0;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex: 1;

  height: 40px;
  width: 100%;
  min-width: 420px;
  @media (min-width: 610px) {
    max-width: 400px;
  }

  margin: auto;
  background-color: #3e4347;
  border-radius: 5px;

  form {
    display: flex;
    flex: 1;

    button {
      width: 100px;
      border: none;
      border-radius: 0 5px 5px 0;
    }
  }
`;
