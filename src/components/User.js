import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2>Count :{count}</h2>
      <h2>{name}</h2>
      <h2>Location : Miraj</h2>
    </div>
  );
};

export default User;
