
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loading } from 'react-simple-chatbot';

const APIComponent = ({ steps, trigger, triggerNextStep }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [reply, setReply] = useState(null)
    const question = steps['input']['message']
    useEffect(() => {
        axios.post('https://ifpyapi-1-p4769562.deta.app/chat', { question })
            .then((response) => {
                setIsLoading(false)
                setReply(response.data.reply)
                triggerNextStep({ value: '', trigger });
            })
            .catch((error) => {
                setIsLoading(false)
                setReply("I am currently busy. Would you mind if we talk later?")
                triggerNextStep({ value: '', trigger });
            });
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <div>{reply}</div>}
        </>
    );
};

export default APIComponent;
