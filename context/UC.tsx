import React, { useState } from "react";

export const UC = React.createContext<any>(null);

const Provider = ({ children }: any) => {
  const [allFav, setAllFav] = useState<string[]>([]);

  return (
    <>
      <UC.Provider
        value={{
          allFav,
          setAllFav,
        }}
      >
        {children}
      </UC.Provider>
    </>
  );
};

export default Provider;
