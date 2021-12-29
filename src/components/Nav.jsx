import React from "react";

const styleNav = {
  position: "fixed",
  width: "100%",
  height: "10vh",
  textAlign: "center",
  margin: "0",
  backgroundColor: "black",
  color: "white",
  zIndex: "100",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px'
};

export const Nav = () => {
  return (
    <>
      <nav style={styleNav}>
        <p>Catálogo</p>
      </nav>
    </>
  );
};
