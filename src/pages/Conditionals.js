import React, { useState } from "react";

const Conditionals = () => {
  const [text, setText] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>What is Fullstack?</h1>
      <button onClick={() => setText(!text)}>Show Text</button>
      {text && (
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
      )}
      {isLoggedIn ? (
        <p>Welcome! You're logged in</p>
      ) : (
        <p>You're not logged in, Please login</p>
      )}
    </div>
  );
};

export default Conditionals;
