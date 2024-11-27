import {
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useState,
} from "react";

type StateProps = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  baseUrl: string;
};
type ContextProviderProps = {
  children?: ReactNode;
};

export const MyContext = createContext<StateProps>({
  modal: false,
  setModal: () => {},
  baseUrl: ""
});

export function MyDataProvider({ children }: ContextProviderProps) {
  const [modal, setModal] = useState(false);
  const baseUrl = "https://zubitechnologies.com"

  return (
    <MyContext.Provider value={{ modal, setModal, baseUrl }}>
      {children}
    </MyContext.Provider>
  );
}
