import React from 'react'
import useUser from './useUser'
const useContextValue = () => {
  const { UserContext } = useUser()
  const context = React.useContext(UserContext)
  return context
}
export default useContextValue
