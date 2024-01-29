import React, { useState } from "react";

import "../../firebase/firebaseConfig";
import { getFirestore, collection } from "firebase/firestore";

import "./HomePage.scss";

const HomePage = () => {
  const db = getFirestore();
  const col = collection(db, "phones");

  return (
    <div className="HomePage">
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
