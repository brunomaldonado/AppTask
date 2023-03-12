import React, { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = React.useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }

    }, 1500)
  })

  const saveItem = (newItem) => {
    try {
      const strigifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strigifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {item, saveItem, loading, error};
}

export {useLocalStorage}