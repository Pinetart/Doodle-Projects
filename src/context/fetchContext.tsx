import { createContext, useState } from "react";
import Request from "../models/request";
import { RequestContextObject } from "../interfaces/interfaces";

const FetchContext = createContext<RequestContextObject>({ items: [] });
