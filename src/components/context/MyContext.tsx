import { ReactNode, SetStateAction, Dispatch, createContext, useState } from "react";

type StateProps = {
    modal: boolean
    setModal: Dispatch<SetStateAction<boolean>>
}
type ContextProviderProps = {
    children?: ReactNode
}

export const MyContext = createContext<StateProps>({
    modal: false,
    setModal: () => {}
});

export function MyDataProvider ({ children }: ContextProviderProps){
    const [modal, setModal] = useState(false)
    return <MyContext.Provider value={{modal, setModal}}>{children}</MyContext.Provider>
}
