import React, { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => console.log(err),
      {
        timeout: 30000
      }
    );
  }, []);

  const handleOnSubmit = event => {
    event.preventDefault();
    const data = {
      github_username,
      techs,
      latitude,
      longitude
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          value={github_username}
          onChange={event => setGithubUsername(event.target.value)}
          id="github_username"
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          onChange={event => setTechs(event.target.value)}
          value={techs}
          id="techs"
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            onChange={event => setLatitude(event.target.value)}
            value={latitude}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            onChange={event => setLongitude(event.target.value)}
            value={longitude}
            required
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
