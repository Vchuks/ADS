import {
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useState,
  //   useEffect
} from "react";

type Geo = {
  lat:  string;
  log:  string;
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

type Detail = {
  account_disabled: number;
  email: string;
  id: number;
  name: string;
  phone_number: string;
  status: string;
  type: string;
};

type Report = {
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
    id: string;
    lat: string;
    log: string;
    name: string;
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
    device_number: string;
    id: string;
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

type Agent = {
  agent_details: {
    account_disabled: number;
    email: string;
    id: number;
    name: string;
    phone_number: string;
    status: string;
    type: string;
  };
  agent_unaccepted_logs: { data: []; count: number };
  attendedcases: { data: []; count: number };
  closedcases: { data: []; count: number };
  pendingcases: { data: []; count: number };
};

type Responder = {
  id: string;
  email: string;
  company_phone_number: string;
  company_address: string;
  company_name: string;
  nature_of_emergency: string;
  company_license: string;
};
type EachResponder = {
  id: number | string;
  email: string;
  company_phone_number: string;
  company_address: string;
  company_name: string;
  nature_of_emergency: string;
  company_license: string;
};
type EachAgent = {
    agent_details: {
        id: number;
        name: string;
        email: string;
        type: string;
        phone_number: string;
        status: string;
        account_disabled: number;
    },
    agent_unaccepted_logs: {
        data: [],
        count: number
    },
    closedcases: {
        data: [],
        count: number
    },
    attendedcases: {
        data: [
            {
                id: number;
                deviceid: string;
                name: string;
                lat: string;
                log: string;
                accident_type: string;
                nature_of_request: string;
                priority: string;
                date: string;
                time: string;
                created_at: string;
                responder_id: number;
                agent_id: number;
                request_accepted: number;
                closed_status: number;
                assigned_at: string;
            }
        ],
        count: number;
    },
    pendingcases: {
        data: [],
        count: number
    }
};

type AllAgents = {
  current_page: number;
  data: [];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: [];
  next_page_url: null | string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
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
  getAgent: Agent;
  setGetAgent: Dispatch<SetStateAction<Agent>>;
  getResponder: Responder[];
  setGetResponder: Dispatch<SetStateAction<Responder[]>>;
  eachResponder: EachResponder;
  setEachResponder: Dispatch<SetStateAction<EachResponder>>;
  eachAgent: EachAgent;
  setEachAgent: Dispatch<SetStateAction<EachAgent>>;
  result: Detail;
  setResult: Dispatch<SetStateAction<Detail>>;
  getAllAgents: AllAgents;
  setGetAllAgents: Dispatch<SetStateAction<AllAgents>>;
};

type ContextProviderProps = {
  children?: ReactNode;
};

const defaultState = {
  geo: {
    lat: '',
    log: '',
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

  devicereport: {
    accident_detected: {
      accident_type: "",
      agent_id: 1,
      assigned_at: "",
      closed_status: 0,
      created_at: "",
      date: "",
      deviceid: "",
      id: "",
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
      id: "",
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
  setDeviceReport: () => {},
  getAgent: {
    agent_details: {
      account_disabled: 0,
      email: "",
      id: 0,
      name: "",
      phone_number: "",
      status: "",
      type: "",
    },
    agent_unaccepted_logs: { data: [], count: 0 },
    attendedcases: { data: [], count: 0 },
    closedcases: { data: [], count: 0 },
    pendingcases: { data: [], count: 0 },
  },
  setGetAgent: () => {},

  getAllAgents: {
    current_page: 0,
    data: [],
    first_page_url: "",
    from: 0,
    last_page: 0,
    last_page_url: "",
    links: [],
    next_page_url: "",
    path: "",
    per_page: 0,
    prev_page_url: "",
    to: 0,
    total: 0,
  },
  setGetAllAgents: () => {},

  getResponder: [
    {
      id: "",
      email: "",
      company_phone_number: "",
      company_address: "",
      company_name: "",
      nature_of_emergency: "",
      company_license: "",
    },
  ],
  setGetResponder: () => {},
  eachResponder: {
    id: 0,
    email: "",
    company_phone_number: "",
    company_address: "",
    company_name: "",
    nature_of_emergency: "",
    company_license: "",
  },
  setEachResponder: () => {},
  result: {
    account_disabled: 0,
    email: "",
    id: 0,
    name: "",
    phone_number: "",
    status: "",
    type: "",
  },
  setResult: () => {},

  eachAgent:{
    agent_details: {
        id: 1,
        name: '',
        email: '',
        type: '',
        phone_number:'',
        status: '',
        account_disabled: 1
    },
    agent_unaccepted_logs: {
        data: [],
        count: 0
    },
    closedcases: {
        data: [],
        count: 0
    },
    attendedcases: {
        data: [
            {
                id: 21,
                deviceid: '',
                name: '',
                lat: '',
                log: '',
                accident_type: '' ,
                nature_of_request: '',
                priority: '',
                date: '',
                time: '',
                created_at: '',
                responder_id: 1,
                agent_id: 1,
                request_accepted: 1,
                closed_status: 0,
                assigned_at: "",
            }
        ],
        count: 1,
    },
    pendingcases: {
        data: [],
        count: 0,
    }
  },
  setEachAgent: ()=>{},
} as StateProps;

export const MapContext = createContext(defaultState);

export function MapProvider({ children }: ContextProviderProps) {
  const [geo, setGeo] = useState<Geo>({
    lat: '6.578249',
    log: '3.364786',
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
      id: "",
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
      id: "",
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
  const [getResponder, setGetResponder] = useState<Responder[]>([]);
  const [eachResponder, setEachResponder] = useState<EachResponder>({
    id: 0,
    email: "",
    company_phone_number: "",
    company_address: "",
    company_name: "",
    nature_of_emergency: "",
    company_license: "",
  });

  const [result, setResult] = useState<Detail>({
    account_disabled: 0,
    email: "",
    id: 0,
    name: "",
    phone_number: "",
    status: "",
    type: "",
  });

  const [eachAgent, setEachAgent] = useState<EachAgent>({
    agent_details: {
        id: 1,
        name: '',
        email: '',
        type: '',
        phone_number:'',
        status: '',
        account_disabled: 1
    },
    agent_unaccepted_logs: {
        data: [],
        count: 0
    },
    closedcases: {
        data: [],
        count: 0
    },
    attendedcases: {
        data: [
            {
                id: 21,
                deviceid: '',
                name: '',
                lat: '',
                log: '',
                accident_type: '' ,
                nature_of_request: '',
                priority: '',
                date: '',
                time: '',
                created_at: '',
                responder_id: 1,
                agent_id: 1,
                request_accepted: 1,
                closed_status: 0,
                assigned_at: "",
            }
        ],
        count: 1,
    },
    pendingcases: {
        data: [],
        count: 0,
    }
  })

  const [getAllAgents, setGetAllAgents] = useState<AllAgents>({
    current_page: 0,
    data: [],
    first_page_url: "",
    from: 0,
    last_page: 0,
    last_page_url: "",
    links: [],
    next_page_url: "",
    path: "",
    per_page: 0,
    prev_page_url: "",
    to: 0,
    total: 0,
  })

  const [getAgent, setGetAgent] = useState<Agent>({
    agent_details: {
      account_disabled: 0,
      email: "",
      id: 0,
      name: "",
      phone_number: "",
      status: "",
      type: "",
    },
    agent_unaccepted_logs: { data: [], count: 0 },
    attendedcases: { data: [], count: 0 },
    closedcases: { data: [], count: 0 },
    pendingcases: { data: [], count: 0 },
  });

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
        setDeviceReport,
        getAgent,
        setGetAgent,
        getResponder,
        setGetResponder,
        eachResponder,
        setEachResponder,
        result,
        setResult,
        getAllAgents,
        setGetAllAgents,
        eachAgent,
        setEachAgent
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
