import React, { useState } from "react";
import styled from "styled-components";

const SortCards = ({ sorted, users }) => {
  const [isActive, setIsActive] = useState("stars");

  const handleSortButton = ({ target }) => {
    const sortKey = target.dataset.sort;
    const sortType = target.dataset.type;
    setIsActive(sortKey);
    sorted(users, sortKey === "alpha" ? "name" : "stargazers_count", sortType);
  };

  return (
    <Wrapper>
      <SortLabel>Sort by</SortLabel>
      <WrapSortControl>
        <SortButton
          data-sort="alpha"
          data-type="alpha"
          className={isActive === "alpha" ? "active " : ""}
          onClick={handleSortButton}
        >
          Alphabetical
        </SortButton>
        <SortButton
          data-sort="stars"
          data-type="int"
          className={isActive === "stars" ? "active " : ""}
          onClick={handleSortButton}
        >
          By Most Stars
        </SortButton>
      </WrapSortControl>
    </Wrapper>
  );
};

export default SortCards;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SortLabel = styled.h3`
  font-size: 1.3rem;
  line-height: 1;
  margin: 0;
`;

const WrapSortControl = styled.div`
  display: flex;
`;

const SortButton = styled.button`
  line-height: 1.5;
  border: #cccccc solid 1px;
  background: #ffffff;
  padding: 3px 20px;
  &:first-child {
    margin-left: 15px;
    border-radius: 5px 0px 0px 5px;
  }
  border-radius: 0px 5px 5px 0px;
  &.active,
  :focus {
    background-color: #f4f8fd;
  }
`;
