import { useState , useEffect} from "react"
import React from 'react'

const App = () => {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        setStatus(data.message);
      })
      .catch(() => {
        setStatus("Backend connection failed");
      });
  }, []);

  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1>TaskFlow Enterprise</h1>
      <h2>Project Management SaaS</h2>
      <p>Backend status: {status}</p>
    </main>
  )
}

export default App

