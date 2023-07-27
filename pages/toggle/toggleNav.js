// const toggleNav = () => {
//     document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
// }

import React from 'react';

const ToggleNav = () => {
  const handleToggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  };

  return (
    <button onClick={handleToggleNav}>Toggle Nav</button>
  );
};

export default ToggleNav;

//  const toggleNav = () => {
//   const body = document.body;
//   const currentNavState = body.getAttribute("data-nav") === "true";
//   body.setAttribute("data-nav", !currentNavState);
// };