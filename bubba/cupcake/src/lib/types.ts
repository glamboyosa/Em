import { CSSProperties, SyntheticEvent } from 'react'
export type ButtonProps = {
  onSubmit: VoidFunction
  style: CSSProperties
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
