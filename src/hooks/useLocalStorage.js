import { useState } from "react"

const useLocalStorage = (key, initialValue) => {

    
    const getLocalStorageValue = (key, initialValue) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    }
    
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));
    const setValue = (value) => {
        // check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value;

        //set to state
        setLocalStorageValue(value);

        //set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore));
    }

    return [localStorageValue, setValue]
}

export default useLocalStorage