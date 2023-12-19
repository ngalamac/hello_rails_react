import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../store/greetingsSlice';

const UpdatedGreetingComponent = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);
  const loadingStatus = useSelector((state) => state.greetings.loading);

  useEffect(() => {
    //fetch random greeting
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Updated Random Greeting:</h1>
      {loadingStatus === 'loading' ? (
        <p>Loading...</p>
      ) : loadingStatus === 'failed' ? (
        <p className="error-message">Error loading greeting</p>
      ) : (
        <p className='greeting-content'>{greeting}</p>
      )}
    </div>
  );
};

export default UpdatedGreetingComponent;
