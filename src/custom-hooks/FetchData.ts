import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [carData, setData] = useState<any>([]);

    const handleDataFetch = async () => {
        const result = await server_calls.get();
        setData(result)
    }

    // introducing the useEffect hook to add data to react state
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {carData, getData:handleDataFetch}
}