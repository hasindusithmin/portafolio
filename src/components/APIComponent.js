
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loading } from 'react-simple-chatbot';

const APIComponent = ({ steps, trigger, triggerNextStep }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [reply, setReply] = useState(null)
    const question = steps['input']['message']
    useEffect(() => {
        axios.post('https://portafolio-chatbot.onrender.com', { question })
            .then((response) => {
                setIsLoading(false)
                setReply(response.data)
                triggerNextStep({ value: '', trigger });
            })
            .catch((error) => {
                setIsLoading(false)
                setReply(error.message)
            });
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <div>{reply}</div>}
        </>
    );
};

export default APIComponent;
