import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactRRuleGenerator from "./components/ReactRRuleGenerator";
import translations from "./translations";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ReactRRuleGenerator
          onChange={(e: any) => console.log(e)}
          value={""}
          config={
            {
              hideStart: false,
            } as any
          }
          translations={translations.english}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
