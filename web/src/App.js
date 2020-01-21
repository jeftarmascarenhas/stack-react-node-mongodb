import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

import DevForm from "./devForm";
import DevItem from "./devItem";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const resp = await api.get("/devs");
      setDevs(resp.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const resp = await api.post("/devs", data);
    setDevs(devs => [...devs, resp.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {!!devs.length &&
            devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
        </ul>
      </main>
    </div>
  );
}

export default App;
