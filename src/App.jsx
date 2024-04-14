// import React from "react";

const App = () => {
  const names = ["Tom", "Jerry", "Haris", "Peter"];
  const loggedIn = true;
  const loggedOut = false;

  return (
    <>
      <div className="text-5xl">App</div>
      <p>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        {loggedIn && <h1>Hello Member</h1>}
        {loggedOut ? <h1>Log out before you leave</h1> : <h1>not logged in</h1>}
      </p>
    </>
  );
};

export default App;
