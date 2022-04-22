import { useEffect } from 'react'
import useUser from './lib/hooks/useUser'
import useCookie from './lib/hooks/useCookie'
import { useFetch } from 'mey'
import Index from './pages'
import { TUser } from './lib/types'
import useContextValue from './lib/hooks/useContextValue'
function App() {
  const { UserContextProvider } = useUser()
  const { setUserToContext } = useContextValue()
  const cookieMap = useCookie('snowman', true)
  const { error, refetch, data } = useFetch<TUser>(
    `/api/auth/me?id=${cookieMap.value}`,
  )
  useEffect(() => {
    if (
      cookieMap.value &&
      !cookieMap.isJWTExpired &&
      !cookieMap.loading &&
      error
    ) {
      refetch()
    }
  }, [cookieMap, error])

  useEffect(() => {
    if (data) {
      setUserToContext(data)
    }
  }, [data, setUserToContext])

  return (
    <UserContextProvider>
      <Index />
    </UserContextProvider>
  )
}

export default App
