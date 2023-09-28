import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './Design/CoffeeCard';

function App() {
const loadedCoffees = useLoaderData();
const [coffees,setCoffees] = useState(loadedCoffees)

  return (
 <div className='m-20'>
  <h1 className='text-6xl text-center text-error-content my-20'>Our Popular Products</h1>
  <div className='grid md:grid-cols-2 gap-4'>
       {
    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
   }
  </div>

 </div>
  )
}

export default App
