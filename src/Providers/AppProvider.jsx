import { useState } from "react";
import AppContext from "../Contexts/AppContext";
import {
  addToStorage,
  getStoredApps,
  removeFromStorage,
} from "../utilities/localStorage";
import { toast } from "react-toastify";

const AppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() =>
    getStoredApps("apps")
  );

  const handleInstallApp = (key, value) => {
    addToStorage(key, value);
    setInstalledApps([...installedApps, value]);
    toast.success("Great news! The app has been successfully installed!", {
      autoClose: 2000,
    });
  };

  const handleUninstallApp = (key, id) => {
    const updatedInstalledApps = installedApps.filter((item) => item.id !== id);
    setInstalledApps(updatedInstalledApps);
    removeFromStorage(key, id);
    toast.warn("The app has been successfully uninstalled!");
  };

  return (
    <AppContext value={{ installedApps, handleInstallApp, handleUninstallApp }}>
      {children}
    </AppContext>
  );
};

export default AppProvider;
