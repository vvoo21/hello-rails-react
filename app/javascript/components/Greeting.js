import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.greeting)

    useEffect(() => {
      dispatch(fetchGreeting())
    }, [])
    
  return (
    <div>
        <h4>Random Greeting</h4>
        <h2>{data}</h2>
    </div>
  )
}

export default Greeting