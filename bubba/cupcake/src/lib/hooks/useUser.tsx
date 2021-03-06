import React from 'react'
import { TUserContext, TUser, ContextProviderProps } from '../types'

const useUser = () => {
  const [user, setUser] = React.useState<TUser | null>(null)
  const UserContext = React.createContext({} as TUserContext)
  const setUserToContext = React.useCallback((user: TUser) => {
    setUser(user)
  }, [])
  const UserContextProvider = ({ children }: ContextProviderProps) => (
    <UserContext.Provider value={{ user, setUserToContext }}>
      {children}
    </UserContext.Provider>
  )

  return { UserContext, UserContextProvider }
}
export default useUser
