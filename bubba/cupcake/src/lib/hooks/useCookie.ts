import React from 'react'
import { isExpired, decodeToken } from 'react-jwt'
import { TGenericJWTType } from '../types'

function useCookie<T = string | TGenericJWTType>(name: string, isJWT = false) {
  const [loading, setLoading] = React.useState(true)
  const [allCookiesList, setAllCookiesList] = React.useState<string[] | null>(
    null,
  )
  const [isJWTExpired, setIsJWTExpired] = React.useState(false)
  const [value, setValue] = React.useState<T | null>(null)

  React.useEffect(() => {
    const allCookiesList = document.cookie.split(';').map((el) => el.trim())
    try {
      const getCookie = allCookiesList.filter((el) => el.includes(name))
      const cookieValue = getCookie[0].split(`${name}=`).filter((el) => el)[0]

      if (!isJWT) {
        setLoading(false)
        setValue(cookieValue as unknown as T)
        return
      }
      if (isExpired(cookieValue)) {
        setIsJWTExpired(true)
        setLoading(false)
        return
      }
      // we have a token which isn't expired and we want to decode the token

      const token = decodeToken(cookieValue)
      setLoading(false)
      setValue(token as T)
    } catch (e: any) {
      setAllCookiesList(allCookiesList)
      setLoading(false)
      setValue(null)
    }
  }, [name, isJWT])

  return { value, loading, isJWTExpired, allCookiesList }
}
export default useCookie
