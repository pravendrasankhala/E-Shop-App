import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { removeCard } from '../../Feature/cardSlice';

const Card = () => {

  const cardItems = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const removeHandlre = (itemsid)=>{
    dispatch(removeCard(itemsid))
  }



  return (
    <div className='max-w-[1320px] mx-auto text-center'>
      <h1>Cards  !</h1>
      <div className='w-full bg-[#eee] p-[20px]'>
        {
          cardItems.map((items) => (
           <div className='w-[100%] p-[10px] flex justify-between m-[10px] bg-[#fff]'>
              <img src={items.image} className="w-[30px]" alt=''/>
              <h5>{items.title}</h5>
              <h5>{items.price}</h5>
              <button className='px-[8px] bg-[blue] text-[white] rounded cursor-pointer' onClick={()=>{removeHandlre(items.id)}}>Remove</button>
           </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card
