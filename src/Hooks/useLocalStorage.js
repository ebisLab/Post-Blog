import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(()=>{
        const checkValue = window.localStorage.get(key);
        return checkValue ? JSON.parse(checkValue) : initialValue
    });

    const setValue = value =>{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue]
   
}