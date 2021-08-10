import React from "react";
import { Header } from "../components";
import Leaderboard from "../components/Leaderboards/leaderboard";

export default function LeaderBoardsPage() {
  return (
    <Header>
      <div style={{ margin: "20px" }}>
        <Leaderboard />
      </div>
    </Header>
  );
}
