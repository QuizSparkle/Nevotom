import React, { createContext, useContext, useState } from 'react'

// Define the context type
interface ContextType {
  notify: boolean
    setNotify: (notify: boolean) => void;
}

// Create the UserContext
const NotifyContext = createContext<ContextType | undefined>(undefined)

// Create a provider component to wrap your app with
export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
    const [notify, setNotify] = useState<boolean>(false);

  return (
    <NotifyContext.Provider value={{ notify, setNotify }}>
      {children}
    </NotifyContext.Provider>
  )
}

// Create a custom hook to easily access the context
export const useNotify = () => {
  const context = useContext(NotifyContext)

  if (!context) {
    throw new Error('useNotify must be used within a UserProvider')
  }

  return context
}
