import { RepeatOneSharp } from '@material-ui/icons';
import React from 'react';

let token = 'daa6b8b25684ac3a0e15e0d9e8a85c531ba2bf5a941c06cd';

//CRUD operations
export const server_calls = {
    get: async () => {
        //comp this to insomnia functionality
        const response = await fetch(`https://car-inventory-api.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json() //returns array of all cars
    },

    create: async(data:any = {}) => {
        const response = await fetch(`https://car-inventory-api.herokuapp.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-api.herokuapp.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory-api.herokuapp.com/api/cars`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}