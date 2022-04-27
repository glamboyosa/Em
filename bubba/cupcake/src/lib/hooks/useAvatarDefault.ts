import React from 'react'

const useAvatarDefault = (): [
  React.MutableRefObject<string | undefined>,
  (name: string) => string,
] => {
  const avatarDefault = React.useRef<string>()

  const updateAvatarDefault = (name: string) =>
    (avatarDefault.current = name
      .split(' ')
      .map((el) => el[0])
      .join(''))

  return [avatarDefault, updateAvatarDefault]
}
export default useAvatarDefault
