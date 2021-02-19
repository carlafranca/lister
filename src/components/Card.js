import React from "react";

export default function Card({ user }) {
  return (
    <>
      <a href={user.html_url} className="card" rel="noreferrer" target="_blank">
        <h3 className="name">{user.full_name}</h3>
        <ul className="stats">
          <li>{user.stargazers_count} Stargazers</li>
          <li>{user.subscribers_count} People Watching</li>
        </ul>

        <div className="desc">{user.description}</div>
      </a>
    </>
  );
}
