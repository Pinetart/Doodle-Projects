// useFetch interfaces & types
export interface UseFetchProps {
  url: string;
}

export type Requests = any;

export interface Data {
  approvaltime: string | Date | null;
  backout: string;
  bimpact: string;
  cimpact: string;
  date: any;
  denialtime: string | Date | null;
  description: string;
  id: string;
  implementation: string;
  justification: string;
  owner: string;
  owneremail: string;
  requestor: string;
  requestoremail: string;
  risk: string;
  status: string;
  timecreated: string | Date;
  urgency: string;
  verification: string;
}
// export type Requests = Data[];

//All Props
export interface Props {
  requests?: Data[];
  updateDashboard?: (array: Requests) => void;
  allRequest?: Data[];
  changeFilter?: (newFilter: string) => void;
}

export type ID = {
  id: string;
};
