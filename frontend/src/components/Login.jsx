import axios from "axios";
import React, { useEffect, useRef } from "react";

function Login({ setUser }) {
  const input = useRef();

  return (
    <div className="login-container">
      <input type="text" n placeholder="Username" ref={input} />
      <button
        className="orange-button"
        onClick={() => {
          axios
            .post("http://localhost:3000/login", {
              username: input.current.value,
            })
            .then((res) => {
              if (res.data[0]) {
                setUser(res.data[0].username);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
