"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const jeu = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

// useEffect(()=>{
//     alert('la page vient de changer')
// }, [number])
  

// Utile quand on utilise des ressources, 
// la fonction return est exécuté avant que le composant soit démonté
// ou avant que le parent soit démonté, utilisation pour les déconnexion, 
//suppression de datas ect, bonne pratique lorsque le composant est démonté

useEffect(()=>{
    return()=>{
        alert('le composant est démonté')
    }
}, [])



  return (
    <>
   <Link href='/cv'>CV</Link>
      <div>{number}</div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  );
};

export default jeu;
