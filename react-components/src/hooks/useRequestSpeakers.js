import { data } from "../../SpeakerData";
import React, { useState, useEffect } from 'react';

function useRequestSpeakers(delayTIme) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTIme);
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

    return {
        speakersData, isLoading, hasErrored, error, onFavoriteToggle
    }
}

export default useRequestSpeakers;