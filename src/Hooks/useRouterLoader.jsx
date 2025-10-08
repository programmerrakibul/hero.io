import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useRouterLoader = () => {
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentPath !== pathname) {
      setIsLoading(true);
      setCurrentPath(pathname);
    } else if (pathname === currentPath) {
      const timerId = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [pathname, currentPath]);

  return isLoading;
};

export default useRouterLoader;
