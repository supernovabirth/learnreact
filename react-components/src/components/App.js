import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    //TODO: save default value on user profile, auto save selected value to user profile
    //onChange setTheme and call API to save value

    return (
        <div className={theme === "light" ? "container-fluid" : "container-fluid dark"}>
            <Header theme={theme} />
            <SpeakersToolbar theme={theme} setTheme={setTheme} />
            <SpeakersList data={data} />
        </div>
    )
}

export default App;