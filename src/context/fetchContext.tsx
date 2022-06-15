import { createContext, useState } from "react";
import Request from "../models/request";
import { RequestContextObject, Props } from "../interfaces/interfaces";

const FetchContext = createContext<RequestContextObject>({
  addRequest: (request) => {
    const error = null;
    const isLoading = false;
    return { error, isLoading };
  },
  readRequest: (id?) => {
    const requests = [];
    const error = null;
    const isLoading = false;
    return { requests, error, isLoading };
  },
  deleteRequest: (id) => {},
});

const FetchContextProvider: React.FC<Props> = ({ children }) => {
  const addRequestHandler = async (request: Request) => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("Failed to add Request");
      }
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setIsLoading(false);
      } else {
        console.log("Unexpected error", err);
      }
    }

    return { error, isLoading };
  };

  const readRequestHandler = async (id?: string) => {
    const [requests, setRequest] = useState<Request[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    try {
      const response = await fetch("http://localhost:8000/requests");
      if (!response.ok) {
        throw new Error("Failed to add Request");
      }
      const data = await response.json();
      setRequest(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }

    return { requests, error, isLoading };
  };

  const deleteRequestHandler = async (id: string) => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    try {
      const response = await fetch("http://localhost:8000/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("Failed to add Request");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }

    return { error, isLoading };
  };

  const contextValue: RequestContextObject = {
    addRequest: addRequestHandler,
    readRequest: readRequestHandler,
    deleteRequest: deleteRequestHandler,
  };
  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  );
};
export default FetchContextProvider;
