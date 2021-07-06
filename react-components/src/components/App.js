import { data } from "../../SpeakerData";
import Header from "./Header";
import { useState } from "react";
import Speakers from "./Speakers";

function App() {
    const [theme, setTheme] = useState("light");
    //TODO: save default value on user profile, auto save selected value to user profile
    //onChange setTheme and call API to save value

    return (
        <div className={theme === "light" ? "container-fluid" : "container-fluid dark"}>
            <Header theme={theme} />
            <Speakers data={data} theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default App;