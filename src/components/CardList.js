import React from "react";
import Card from "./Card";

export default function CardList({ profiles }) {
  return (
    <div className="cards">
      {profiles.map((user) =>
        user.html_url ? <Card key={user.id} user={user} /> : null
      )}
    </div>
  );
}
