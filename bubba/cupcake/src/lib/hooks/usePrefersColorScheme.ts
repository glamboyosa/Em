import React from 'react'

const usePrefersColorScheme = (
  timeOfDay: 'night' | 'day',
): ['light' | 'dark'] => {
  const [colorScheme, setColorScheme] = React.useState<'light' | 'dark'>(() =>
    timeOfDay === 'day' ? 'light' : 'dark',
  )

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChangeHandler = () =>
      colorScheme === 'light' ? setColorScheme('light') : setColorScheme('dark')

    !query.matches ? setColorScheme('light') : setColorScheme('dark')

    query.addEventListener('change', onChangeHandler)

    return () => query.removeEventListener('change', onChangeHandler)
  }, [colorScheme])

  return [colorScheme]
}
export default usePrefersColorScheme
