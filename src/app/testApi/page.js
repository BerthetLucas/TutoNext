"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// https://dumbstockapi.com/stock?echanges=NYSE

const api = () => {
  const [data, setData] = useState(null);

  const [loading, setloading] = useState(true);

  // En laissant le tableau vide, on active le useEffect au 
  //chargement de la page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://dumbstockapi.com/stock?echanges=NYSE"
        );
        setData(reponse.data);
        setloading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setData(false);
      }
    };
    fetchData();
    return () => {
        // Fonction de nettoyage
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default api;
