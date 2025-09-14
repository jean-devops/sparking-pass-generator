import { Options } from "../../types/options";

export interface Props{
    passValue: string
    onChange: (value: string ) => void
    length: number
    options: Options
}

