import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("my_data.json");
      const data = await res.json();
      console.log('DATA: ', data);
      setUserData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {!isLoading ? children : null}
    </UserContext.Provider>
  );
};
