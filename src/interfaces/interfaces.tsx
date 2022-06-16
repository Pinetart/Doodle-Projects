import Request from "../models/Request";
export interface UseFetchProps {
  url: string;
}

export type RequestType = {
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
  ownerEmail: string;
  requestor: string;
  requestorEmail: string;
  risk: string;
  status: string;
  timeCreated: string | Date;
  urgency: string;
  verification: string;
};

//All Props
export interface Props {
  requests?: Request[];
  updateDashboard?: (array: Request[]) => void;
  allRequest?: Request[];
  changeFilter?: (newFilter: string) => void;
}

export type ID = {
  id: string;
};

// export type SingleRequest = {
//   approvaltime: string | Date | null;
//   backout: string;
//   bimpact: string;
//   cimpact: string;
//   date: any;
//   denialtime: string | Date | null;
//   description: string;
//   id: string;
//   implementation: string;
//   justification: string;
//   owner: string;
//   owneremail: string;
//   requestor: string;
//   requestoremail: string;
//   risk: string;
//   status: string;
//   timecreated: string | Date;
//   urgency: string;
//   verification: string;
// };
