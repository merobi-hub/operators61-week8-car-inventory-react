import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';
// import { PinDropSharp } from '@material-ui/icons';


interface CarFormProps {
    id?: string;
    data?:{}
}

interface CarState {
    name: string;
    model: string;
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {

        if(props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)

        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            console.log(store.getState())
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <Input {...register('category')} name="category" placeholder="Category"/>
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <Input {...register('seats')} name="seats" placeholder="Seats"/>
                </div>
                <div>
                    <label htmlFor="horsepower">Horsepower</label>
                    <Input {...register('horsepower')} name="horsepower" placeholder="Horsepower"/>
                </div>
                <div>
                    <label htmlFor="torque">Torque</label>
                    <Input {...register('torque')} name="torque" placeholder="Torque"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="interior">Interior</label>
                    <Input {...register('interior')} name="interior" placeholder="Interior"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}