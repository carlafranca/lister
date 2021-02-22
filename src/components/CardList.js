import React from "react";
import styled from "styled-components";
import Card from "./Card";

function CardList({ profiles }) {
  return (
    <Wrapper>
      {profiles.map((user) =>
        user.html_url ? <Card key={user.id} user={user} /> : null
      )}
    </Wrapper>
  );
}

export default CardList;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
