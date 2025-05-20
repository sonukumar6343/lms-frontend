// // Contextlogin/AuthContext.js
// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   // Initialize auth state from localStorage on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

//     if (storedUser && storedIsLoggedIn === "true") {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Login function
//   const login = (userData) => {
//     setIsLoggedIn(true);
//     setUser(userData);
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // Logout function
//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };



// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // Initialize auth state from localStorage on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     const storedToken = localStorage.getItem("token");

//     if (storedUser && storedIsLoggedIn === "true" && storedToken) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//   }, []);

//   // Login function
//   const login = (userData, authToken) => {
//     setIsLoggedIn(true);
//     setUser(userData);
//     setToken(authToken);
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", authToken);
//   };

//   // Logout function
//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };





"use client";
import { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // const storedToken = sessionStorage.getItemget('token');
    // const storedUser = sessionStorage.getItem('user');
    const storedToken = sessionStorage.getItem("token");
    const storedUser  = sessionStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData, authToken) => {
    setIsLoggedIn(true);
    setUser(userData);
    setToken(authToken);
    // Cookies.set('token', authToken, { expires: 7 });
    // Cookies.set('user', JSON.stringify(userData), { expires: 7 });
     sessionStorage.setItem("token", authToken);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    // Cookies.remove('token');
    // Cookies.remove('user');
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
