import React, { useState, useEffect } from 'react';

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function userRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                //throw "Error happened";
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }

        }
        delayFunc();

    });

    function updateRecord(recordUpdated) {
        //if the id matches replace the block with speakerUpdateRecord .
        //Note: this is like x = x*2 example
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction() {
            try {
                await delay(delayTime);
                setData(newRecords);
            } catch (error) {
                console.log("error thrown inside delayFunction", error);
            }

        }
        delayFunction();
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord
    }
}

export default userRequestDelay;