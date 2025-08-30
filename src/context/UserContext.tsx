import type { UserContextProps } from "../models/User.model";
import type { Params } from "../models/Params.model";
import { useState, createContext } from "react";
import { usersData } from "../data/Users.data";

const UserContext = createContext<UserContextProps>({
  users: usersData,
  toggleLog: () => {},
});

function UserProvider({ children }: Params) {
  const [users, setUserLog] = useState(usersData);
  const toggleLog = (id: number) => {
    setUserLog(
      users.map((u) => (u.id === id ? { ...u, logged: !u.logged } : u))
    );
  };
  return (
    <UserContext.Provider value={{ users, toggleLog }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
