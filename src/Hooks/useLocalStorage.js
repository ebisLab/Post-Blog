
import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(()=>{
        const checkValue = window.localStorage.getItem(key);
        return checkValue ? JSON.parse(checkValue) : initialValue
    });

    //update to local storage
    const setValue = value =>{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue]
   
}
