import React from "react";
import styled from "styled-components";

export default function Card({ user }) {
  return (
    <>
      <CardLink href={user.html_url} rel="noreferrer" target="_blank">
        <CardTitle>{user.full_name}</CardTitle>
        <WrapCardStats>
          <CardStats>{user.stargazers_count} Stargazers</CardStats>
          <CardStats>{user.subscribers_count} People Watching</CardStats>
        </WrapCardStats>

        <CardDesc>{user.description}</CardDesc>
      </CardLink>
    </>
  );
}

const CardLink = styled.a`
  flex: 1 0 300px;
  padding: 15px;
  border-radius: 5px;
  background: #ffffff;
  -webkit-box-shadow: 0px 0px 6px 1px #b9b9b9;
  box-shadow: 0px 0px 6px 1px #b9b9b9;

  color: #404040;
  text-decoration: none;

  @media (min-width: 700px) {
    max-width: calc(50% - 10px);
  }

  @media (min-width: 990px) {
    max-width: calc(33% - 10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 5px;
`;

const WrapCardStats = styled.ul`
  display: flex;
  margin: 0;
  padding: 6px 0;
  list-style: none;
`;

const CardStats = styled.li`
  font-size: 1.2rem;
  line-height: 1.5;
  :first-child {
    margin-right: 15px;
  }
`;

const CardDesc = styled.div`
  font-size: 1.3rem;
  line-height: 1.5;
`;
