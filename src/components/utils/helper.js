export function getGlobalItem(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage.getItem(key)) {
        const value = window.localStorage.getItem(key);
        if (value) return JSON.parse(value ?? "");
      }
    } catch (err) {
      return "";
    }
  }
  
  export function setGlobalItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function clearGlobalItem(key) {
    window.localStorage.removeItem(key);
  }
  
  export function clearAllGlobalItem() {
    window.localStorage.clear();
  }
  
  export function uniqueID() {
    return Math.floor(Math.random() * Date.now());
  }
  
  export function dispatchStorageEvent() {
    window.dispatchEvent(new Event("storage"));
  }