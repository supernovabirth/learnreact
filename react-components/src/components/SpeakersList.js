import Speaker from './Speaker';
import { data } from "../../SpeakerData";
import React, { useState, useEffect } from 'react';
import ReactPlaceHolder from 'react-placeholder';

function SpeakersList({ showSessions }) {

    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(2500);
                //throw "Error happened";
                setIsLoading(false);
                setSpeakersData(data);
            } catch (e) {
                setIsLoading(false);
                setHasErrored(true);
                setError(e);
            }

        }
        delayFunc();

    });

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

    if (hasErrored === true) {
        return (
            <div className="text-danger">
                ERROR: <b>loading Speaker Data failed {error}</b>
            </div>
        )
    }
    //if (isLoading === true) return <div>Loading... </div>

    return (
        <div className="container speakers-list">
            <ReactPlaceHolder
                type="media"
                rows={15}
                className={"speakerslist-placeholder"}
                ready={isLoading === false}
            >
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
            </ReactPlaceHolder>
        </div>
    )
}

export default SpeakersList;