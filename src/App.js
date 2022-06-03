import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Abraham Family Vacations</h1>
      <table width="100%" height="100%" >
        <tr>
          <td>
            <YoutubeEmbed embedId="wWIVUGgBlNM" />
          </td>
          <td>
            <YoutubeEmbed embedId="spxO0S5Kwr4" />
          </td>
          <td>
            <YoutubeEmbed embedId="vbJmyAIk85E" />
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
