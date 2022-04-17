const useTimeOfDay = () => {
  const nightTime = [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]

  const hour = new Date().getHours()
  return nightTime.includes(hour) ? 'night' : 'day'
}
export default useTimeOfDay
