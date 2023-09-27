import React from "react";

export default function Navbar() {
  const style = {
    image1: {
      height: 50,
      width: 50,
      borderRadius: 1,
      left: 0,
      background: "white",
    },
    image2: {
      height: 20,
      width: 20,
      borderRadius: 1,
      background: "white",
    },
  };

  return (
    <>
      <div>
        <nav className="navbar bg-primary" data-bs-theme="dark">
          <div className="container">
            <img
              alt="logo"
              style={style.image1}
              src="https://cdn-icons-png.flaticon.com/128/2981/2981011.png"
            />
            <a className="navbar-brand mx-0" href="/">
              Online Shopping App
            </a>
            <img
              alt="logo"
              style={style.image2}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
