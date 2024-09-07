import React, { useEffect } from "react";
import "../App.css";
import { useAccess } from "../common/AccessContext";

const Home = () => {
  const { hasAccess, setHasAccess } = useAccess();

  const data = [
    {
      id: 1,
      terminationDate: "2020-01-01",
    },
    {
      id: 2,
      terminationDate: "2021-01-01",
    },
    {
      id: 3,
      terminationDate: "2024-12-01",
    },
    {
      id: 4,
      terminationDate: "2025-01-01",
    },
  ];

  const handleClick = (tDate) => {
    const currentDate = new Date();
    const terminationDate = new Date(tDate);
    if (currentDate > terminationDate) {
      setHasAccess(false);
      window.alert("Access Denied");
    } else {
      setHasAccess(true);
      window.alert("Access Granted");
    }
  };

  return (
    <div className="box-container">
      <div className="box">
        <h2>Home Access</h2>

        <ul className="no-bullets">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleClick(item.terminationDate);
              }}
            >
              {item.terminationDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { useAccess } from "./AccessContext";

// const SomeComponent = () => {
//   const { hasAccess, setHasAccess } = useAccess();

//   return (
//     <div>
//       <p>Access: {hasAccess ? "Granted" : "Denied"}</p>
//       <button onClick={() => setHasAccess(!hasAccess)}>
//         Toggle Access
//       </button>
//     </div>
//   );
// };

// export default SomeComponent;
