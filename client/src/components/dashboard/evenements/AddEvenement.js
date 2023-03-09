
import React, { useState } from 'react' 


import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addEvenement } from '../../JS/evenementSlice/eventSlice'

const AddEvenement = () => {
    const [AddEvent, setAddEvent] = useState({
        name:"",
        description:"",
        image:"",
        startDate:"",
        endtDate:" "
      })
    const dispatch = useDispatch()
  return (
    <div>
       
    <div class="wrapper" style={{paddingTop:"-10cm"}}>
    <form onSubmit={(e)=> e.preventDefault()} class="form-signin">
        <h2 class="form-signin-heading">add Event</h2>
        <input onChange={(e)=> setAddEvent({...AddEvent,name:e.target.value}) } type="text" class="form-control"  placeholder="Name" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,description:e.target.value}) } type="text" class="form-control"  placeholder="description" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,image:e.target.value}) } type="text" class="form-control"  placeholder="image" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,startDate:e.target.value}) } type="date" class="form-control"  placeholder="start date" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,endtDate:e.target.value}) } type="date" class="form-control"  placeholder="end date" required="" />

        <button class="btn-primary" onClick={()=> dispatch(addEvenement(AddEvent))}>AddEvent</button>
        
    </form>
    
    </div>
    
    
</div>





    
  )
}

export default AddEvenement