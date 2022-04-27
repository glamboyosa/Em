import React, { CSSProperties, SyntheticEvent } from 'react'
export type ButtonProps = {
  onSubmit: VoidFunction
  style: CSSProperties
  children: React.ReactNode
}
export type NavProps = {
  style: CSSProperties
}
export type InputProps = {
  style: CSSProperties
  onChange: (e: SyntheticEvent) => void
}
export enum countries {
  Nigeria = 'NG',
  England = 'UK',
  America = 'US',
}

export type TGenericJWTType = {
  exp: number
  name: string
  iat?: number
  payload?: {
    [key: string]: any
  }
}
export type TUser = {
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
export type TUserContext = {
  user: TUser | null
  setUserToContext: (user: TUser) => void
}
export type ContextProviderProps = {
  children: React.ReactNode
}
