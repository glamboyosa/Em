import React from 'react'
import { TLocalStorage } from '../types'

const useLocalStorage = (
  key: string,
): [TLocalStorage[] | null, (data: TLocalStorage) => void] => {
  const [data, setData] = React.useState<TLocalStorage[] | null>(null!)

  const setToLocalStorage = React.useCallback(
    (data: TLocalStorage) => {
      if (!window) {
        return
      }
      const items = localStorage.getItem('key')
      if (items) {
        localStorage.setItem(key, JSON.stringify(JSON.parse(items).push(data)))
        setData(JSON.parse(items).push(data))
      } else {
        const newItems: TLocalStorage[] = []
        newItems.push(data)
        localStorage.setItem(key, JSON.stringify(newItems))
        setData(newItems)
      }
    },
    [key],
  )

  React.useEffect(() => {
    const item = localStorage.getItem('key')
    if (item) {
      setData(JSON.parse(item))
    }
  }, [])

  return [data, setToLocalStorage]
}
export default useLocalStorage
