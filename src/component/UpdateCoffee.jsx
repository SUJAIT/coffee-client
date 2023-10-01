import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavBar from '../Design/NavBar';

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const {_id,name,quantity,supplier,taste,category,details,url} = coffee;


   const handleUpdateCoffee = event =>{
    event.preventDefault();
   const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const url = form.photo.value;
    const updatedCoffee = {name,quantity,supplier,taste,category,details,url}
    console.log(updatedCoffee)
    form.reset();

    //send Server data
    fetch(`http://localhost:5000/coffee/${_id}`,{
method:'PUT',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
  title: 'Success!',
  text: 'Coffee Updated Successfully',
  icon: 'success',
  confirmButtonText: 'Done'
})
      }
    })
  }



    return (
      <>
      <NavBar></NavBar>
           <div className='bg-[#F4F3F0] p-24'>
  <h2 className='text-3xl font-extrabold'>Update a Coffee</h2>
  <form onSubmit={handleUpdateCoffee}>
    {/* Row Name and quatity is Start */}
    <div className='md:flex mb-8'>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffe Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
</div>
      <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
   
    <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
  </label>
</div>
    </div>
    {/* Name and quatity is End */}
{/* supplier row start */}
    <div className='md:flex mb-8'>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
   
    <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
  </label>
</div>
      <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
   
    <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
  </label>
</div>
    </div>
{/* supplier row end */}
{/* Category and details row start */}
    <div className='md:flex mb-8'>
      <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
  </label>
</div>
      <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
  
    <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
  </label>
</div>
    </div>
{/* Category and details row end */}

<div className='md:flex mb-8'>
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
  
    <input type="text" name='photo' defaultValue={url} placeholder="Photo URL" className="input input-bordered w-full" />
  </label>
</div>
</div>
<input type='submit' value="Update" className='btn btn-neutral w-full'/>


  </form>
</div>
      </>
 
    );
};

export default UpdateCoffee;