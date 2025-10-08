export const getStoredApps = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const addToStorage = (key, value) => {
  const storedApps = getStoredApps(key);
  storedApps.push(value);
  localStorage.setItem(key, JSON.stringify(storedApps));
};

export const removeFromStorage = (key, id) => {
  const storedApps = getStoredApps(key);
  const updatedApps = storedApps.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedApps));
};
