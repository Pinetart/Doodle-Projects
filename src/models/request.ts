class Request {
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

  constructor(
    approvalTime: string,
    backout: string,
    bimpact: string,
    cimpact: string,
    date: string,
    denialtime: string,
    description: string,
    id: string,
    implementation: string,
    justification: string,
    owner: string,
    ownerEmail: string,
    requestor: string,
    requestorEmail: string,
    risk: string,
    status: string,
    timeCreated: string,
    urgency: string,
    verification: string
  ) {
    this.approvaltime = approvalTime;
    this.backout = backout;
    this.bimpact = bimpact;
    this.cimpact = cimpact;
    this.date = date;
    this.denialtime = denialtime;
    this.description = description;
    this.id = id;
    this.implementation = implementation;
    this.justification = justification;
    this.owner = owner;
    this.ownerEmail = ownerEmail;
    this.requestor = requestor;
    this.requestorEmail = requestorEmail;
    this.risk = risk;
    this.status = status;
    this.timeCreated = timeCreated;
    this.urgency = urgency;
    this.verification = verification;
  }
}
export default Request;
