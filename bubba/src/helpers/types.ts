type TUser = {
  name: string
  email: string
  urls?: TUrls[]
}

type TUrls = {
  originalLink: string
  hash: string
  creationDate: string
  user?: TUser
}

export { TUrls, TUser }
