import { useState } from "react";
import "./styles.css";
import explorer from "./data/FolderData";

import Folder from "./components/Folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
