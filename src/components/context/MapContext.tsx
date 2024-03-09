import {
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useState,
  //   useEffect
} from "react";

type Geo = {
  lat: number | string;
  log: number | string;
};
type Bell = {
  accident_type: string;
  agent_id: number;
  assigned_at: string;
  closed_status: number;
  created_at: string;
  date: string;
  deviceid: string;
  id: number;
  lat: string;
  log: string;
  name: string;
  nature_of_request: string;
  priority: string;
  request_accepted: number;
  responder_id: number;
  time: string;
};
type Table = {
  id: number;
  device_id: string;
  vehicle_name: string;
  device_number: string;
  device_ime: string;
  status: string;
  lat: string;
  log: string;
  owner_email: string;
  owner_name: string;
  owner_phone_number: string;
  owner_address: string;
  vehicle_model_year: string;
  vehicle_chasses_number: string;
  vehicle_plate_number: string;
};
type ID = string | number;
type Filter = string;

type Report = {
  // id: number;
  // device_id: string;
  // vehicle_name: string;
  // device_number: string;
  // status: string;
  // last_accident_detected: string;
  // last_sos_detected: string;
  // owner_name: string;
  // owner_phone_number: string;
  // owner_address: string;
  counts: {
    accident_detected: string;
    attended_case: string;
    manualscan: string;
    offlinedevice: string;
    onlinedevice: string;
    pending_case: string;
    responders: string;
    sos: string;
  };
  details: object;
  notifications: [];
  records: [];
};
type DeviceReport = {
  accident_detected: {
    accident_type: string;
    agent_id: number;
    assigned_at: string;
    closed_status: number;
    created_at: string;
    date: string;
    deviceid: string;
    id: number;
    lat: string;
    log: string;
    name:string;
    nature_of_request: string;
    priority: string;
    request_accepted: number;
    responder_id: number;
    time: string;
  };
  accident_history: [];
  devicedetails: {
    device_id: string;
    device_ime: string;
    device_number:string;
    id: string ;
    lat: null | string;
    log: null | string;
    owner_address: string;
    owner_email: string;
    owner_name: string;
    owner_phone_number: string;
    status: string;
    vehicle_chasses_number: string;
    vehicle_model_year: string;
    vehicle_name: string;
    vehicle_plate_number: string;
  };
};

type StateProps = {
  geo: Geo;
  setGeo: Dispatch<SetStateAction<Geo>>;
  bell: Bell[];
  setBell: Dispatch<SetStateAction<Bell[]>>;
  table: Table[];
  setTable: Dispatch<SetStateAction<Table[]>>;
  id: ID;
  setId: Dispatch<SetStateAction<ID>>;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  report: Report;
  setReport: Dispatch<SetStateAction<Report>>;
  devicereport: DeviceReport;
  setDeviceReport: Dispatch<SetStateAction<DeviceReport>>;
};
type ContextProviderProps = {
  children?: ReactNode;
};
const defaultState = {
  geo: {
    lat: 0,
    log: 0,
  },
  setGeo: () => {},
  bell: [
    {
      accident_type: "",
      agent_id: 0,
      assigned_at: "",
      closed_status: 0,
      created_at: "",
      date: "",
      deviceid: "",
      id: 0,
      lat: "",
      log: "",
      name: "",
      nature_of_request: "",
      priority: "",
      request_accepted: 0,
      responder_id: 0,
      time: "",
    },
  ],
  setBell: () => {},
  table: [
    {
      id: 0,
      device_id: "",
      vehicle_name: "",
      device_number: "",
      device_ime: "",
      status: "",
      lat: "",
      log: "",
      owner_email: "",
      owner_name: "",
      owner_phone_number: "",
      owner_address: "",
      vehicle_model_year: "",
      vehicle_chasses_number: "",
      vehicle_plate_number: "",
    },
  ],
  setTable: () => {},
  id: "",
  setId: () => {},
  filter: "",
  setFilter: () => {},
  report: {
    // id: 0,
    // device_id: "",
    // vehicle_name: "",
    // device_number: "",
    // status: "",
    // last_accident_detected: "",
    // last_sos_detected: "",
    // owner_name: "",
    // owner_phone_number: "",
    // owner_address: "",
    counts: {
      accident_detected: "",
      attended_case: "",
      manualscan: "",
      offlinedevice: "",
      onlinedevice: "",
      pending_case: "",
      responders: "",
      sos: "",
    },
    details: {},
    notifications: [],
    records: [],
  },
  setReport: () => {},

  devicereport:{
    accident_detected: {
        accident_type: "",
        agent_id: 1,
        assigned_at: "",
        closed_status: 0,
        created_at: "",
        date: "",
        deviceid: "",
        id: 21,
        lat: "",
        log: "",
        name: "",
        nature_of_request: "",
        priority: "",
        request_accepted: 1,
        responder_id: 1,
        time: "",
      },
      accident_history: [],
      devicedetails: {
        device_id: "",
        device_ime: "",
        device_number: "",
        id: '',
        lat: null,
        log: null,
        owner_address: "",
        owner_email: "",
        owner_name: "",
        owner_phone_number: "",
        status: "",
        vehicle_chasses_number: "",
        vehicle_model_year: "",
        vehicle_name: "",
        vehicle_plate_number: "",
      },
  },
  setDeviceReport:()=>{},
} as StateProps;

export const MapContext = createContext(defaultState);

export function MapProvider({ children }: ContextProviderProps) {
  const [geo, setGeo] = useState<Geo>({
    lat: 0,
    log: 0,
  });

  const [filter, setFilter] = useState<Filter>("");
  const [table, setTable] = useState<Table[]>([]);
  const [id, setId] = useState<ID>("");
  const [report, setReport] = useState<Report>({
    counts: {
      accident_detected: "",
      attended_case: "",
      manualscan: "",
      offlinedevice: "",
      onlinedevice: "",
      pending_case: "",
      responders: "",
      sos: "",
    },
    details: {},
    notifications: [],
    records: [],
  });
    const [devicereport, setDeviceReport] = useState<DeviceReport>({
        accident_detected: {
            accident_type: "",
            agent_id: 1,
            assigned_at: "",
            closed_status: 0,
            created_at: "",
            date: "",
            deviceid: "",
            id: 21,
            lat: "",
            log: "",
            name: "",
            nature_of_request: "",
            priority: "",
            request_accepted: 1,
            responder_id: 1,
            time: "",
          },
          accident_history: [],
          devicedetails: {
            device_id: "",
            device_ime: "",
            device_number: "",
            id: '',
            lat: null,
            log: null,
            owner_address: "",
            owner_email: "",
            owner_name: "",
            owner_phone_number: "",
            status: "",
            vehicle_chasses_number: "",
            vehicle_model_year: "",
            vehicle_name: "",
            vehicle_plate_number: "",
          },
    });
  const [bell, setBell] = useState<Bell[]>([]);

  return (
    <MapContext.Provider
      value={{
        geo,
        setGeo,
        bell,
        setBell,
        table,
        setTable,
        id,
        setId,
        filter,
        setFilter,
        report,
        setReport,
        devicereport,
        setDeviceReport
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
