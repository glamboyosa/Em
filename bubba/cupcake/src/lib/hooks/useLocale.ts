import React from 'react'
const useLocale = (): [
  {
    locale: string
    country: string
  },
] => {
  const states = React.useMemo(
    () => [
      'Abia',
      'Adamawa',
      'Akwa Ibom',
      'Anambra',
      'Bauchi',
      'Bayelsa',
      'Benue',
      'Borno',
      'Cross River',
      'Delta',
      'Ebonyi',
      'Enugu',
      'Edo',
      'Ekiti',
      'Gombe',
      'Imo',
      'Jigawa',
      'Kaduna',
      'Kano',
      'Katsina',
      'Kebbi',
      'Kogi',
      'Kwara',
      'Lagos',
      'Nasarawa',
      'Niger',
      'Ogun',
      'Ondo',
      'Osun',
      'Oyo',
      'Plateau',
      'Rivers',
      'Sokoto',
      'Taraba',
      'Yobe',
      'Zamfara',
    ],
    [],
  )
  const [localeInfo, setLocaleInfo] = React.useState({
    locale: 'en-US',
    country: 'US',
  })

  React.useEffect(() => {
    const options = Intl.DateTimeFormat().resolvedOptions()
    const country = states.includes(options.timeZone.split('/')[1])
      ? 'NG'
      : options.locale.split('-')[1]
    setLocaleInfo({ locale: options.locale, country })
  }, [states])
  return [localeInfo]
}
export default useLocale
