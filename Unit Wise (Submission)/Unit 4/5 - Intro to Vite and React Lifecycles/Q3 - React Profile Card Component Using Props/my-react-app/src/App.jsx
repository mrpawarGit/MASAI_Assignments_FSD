import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const styleJ = {
    justifyContent: "center",
    left: "40%",
    position: "relative",
  };

  return (
    <div style={styleJ}>
      <h1 style={{ textAlign: "center" }}>User Profiles</h1>

      <ProfileCard
        name="John Cena"
        age={29}
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, suscipit vitae sint ipsum eos rem. Dolorum quae neque in numquam temporibus, enim doloribus soluta deserunt autem, dicta cupiditate, quas ipsam?"
      />

      <ProfileCard age={26} />
    </div>
  );
}

export default App;
