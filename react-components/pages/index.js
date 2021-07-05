import { data } from "../SpeakerData";
import Speakers from "../src/components/Speakers";

const IndexPage = () => {
    //const {id, bio, first, last, favorite, twitterHandle, company, sessions} = data[0];
    return (
        <Speakers data={data} />
    )
};

export default IndexPage;
