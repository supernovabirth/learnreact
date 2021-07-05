import { data } from "../SpeakerData";
import Speaker from "../src/components/Speaker";

const IndexPage = () => {
    //const {id, bio, first, last, favorite, twitterHandle, company, sessions} = data[0];
    return (
        <div className="container speakers-list">
            <div className="row">
                {data.map(function (speaker) {
                    return (
                        <Speaker key={speaker.id} speaker={speaker} />
                    );
                })}

            </div>
        </div>
    )
};

export default IndexPage;
