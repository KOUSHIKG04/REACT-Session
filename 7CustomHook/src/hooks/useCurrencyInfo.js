import { useEffect, useState } from "react";
import axios from "axios";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      console.error("API Key is missing! Please check your .env file.");
      return;
    }

    const fetchCurrencyInfo = async () => {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`
        );

        if (res.data && res.data.conversion_rates) setData(res.data.conversion_rates); 

      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);
  
  return data;
};

export default useCurrencyInfo;
