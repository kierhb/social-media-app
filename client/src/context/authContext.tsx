import { createContext, useEffect, useState } from "react";

// @ts-ignore
export const AuthContext = createContext();

// @ts-ignore
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    // @ts-ignore
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Rimuru Tempest",
      profilePic:
        "https://i.pinimg.com/originals/81/91/08/819108a82d8b2e3f04353e4ec9286956.jpg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
