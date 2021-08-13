import React, { useState, useEffect } from "react";
import { steamIds } from "./steamAccounts";
import countryLookup from "country-code-lookup";

const compareRanks = (array) => {
  return array.sort((a, b) => (a.mmr > b.mmr ? -1 : b.mmr > a.mmr ? 1 : 0));
};

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseURL = "https://api.opendota.com/api/players/";

    Promise.all(
      steamIds.map((id) =>
        fetch(baseURL + id)
          .then((json) => json.json())
          .then((res) => ({
            name: res.profile.personaname,
            mmr: res.competitive_rank,
            countryCode: res.profile.loccountrycode,
          }))
          .catch((err) => console.log("something bad happened", err))
      )
    ).then((data) => {
      const result = compareRanks(data);
      setData(result);
    });
  }, []);

  return (
    <>
      <h1>Leadboard</h1>
      <ol>
        {data.length > 0 &&
          data.map((ranking) => (
            <li>
              <p>Name: {ranking.name}</p>
              <p>MMR: {ranking.mmr}</p>
              <p>Country: {countryLookup.byIso(ranking.countryCode).country}</p>
              <hr />
            </li>
          ))}
      </ol>
    </>
  );
};

export default Leaderboard;
