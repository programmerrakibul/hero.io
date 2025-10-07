import { useEffect, useState } from "react";

const useAppsData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/appsData.json");
        const data = await res.json();
        setAppData(data);
        setError(null);
      } catch (err) {
        console.log("Error fetching apps data: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { appData, loading, error };
};

export default useAppsData;
