import Speaker from './Speaker';
import { data } from "../../SpeakerData";
import { useState } from 'react';

function SpeakersList({ showSessions }) {

    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle(id) {
        //find the record where we need to make a change
        const speakersPreviousRecord = speakersData.find(function (rec) {
            return rec.id === id;
        });
        //replace favorite with toggled value and store in speakerUpdatedRecord
        //spread syntax used for merging
        const speakerUpdatedRecord = {
            ...speakersPreviousRecord, favorite: !speakersPreviousRecord.favorite
        };
        //if the id matches replace the block with speakerUpdateRecord .
        //Note: this is like x = x*2 example
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakerUpdatedRecord : rec;
        });
        setSpeakersData(speakersDataNew);
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={() => {
                                onFavoriteToggle(speaker.id);
                            }}
                        />
                    );
                })}

            </div>
        </div>
    )
}

export default SpeakersList;