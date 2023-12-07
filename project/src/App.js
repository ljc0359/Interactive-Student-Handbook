import React from 'react'
import {useState, useEffect} from 'react'
function App() {
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])
  return (
      <div>
          {(typeof backendData.test === 'undefined') ? (
              <p>Loading...</p>
          ): (
              backendData.test.map((test, i) => (
                  <p key = {i}>{test}</p>
              ))
          )}

      </div>
  )
}

export default App;
