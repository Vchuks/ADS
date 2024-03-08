import {
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useState,
//   useEffect
} from "react";


type StateProps = {
  geo: object;
  setGeo: Dispatch<SetStateAction<object>>;
};
type ContextProviderProps = {
  children?: ReactNode;
};

export const MapContext = createContext<StateProps>({
  geo: {
    lat: 6.578249,
    lng: 3.364786,
  },
  setGeo: () => {},
});

export function MapProvider({ children }: ContextProviderProps) {
  const [geo, setGeo] = useState({
    lat: 6.578249,
    lng: 3.364786,
  });
  
  const [filter, setFilter] = useState("");
  const [table, setTable] = useState([]);
  const [id, setId] = useState('')
  const [report, setReport] = useState({})
  const [reportDevice, setReportDevice] = useState({})
  const [bell, setBell] = useState([])

  return (
    <MapContext.Provider
      value={{ geo, setGeo,bell,setBell, table, setTable, id, setId, filter, setFilter, report, setReport }}
    >
      {children}
    </MapContext.Provider>
  );
}
