import React, { useEffect, useState , useRef } from 'react'
import { useDispatchCart , useCart } from './ContextReducer';

export default function Card(props) {

    let options = props.options;
    let priceoption = Object.keys(options)

    
    const priceRef = useRef();
    // for getting no. of item and there value store in cart
   let dispatch =useDispatchCart();
    const [qnt , setqnt] = useState(1)
    const [size , setsize] = useState()
   let data = useCart();

//    cart me changes karne ka tareeka means here updation and addition on cart is done
    const handeladdtocart = async ()=>{

        let food = []
        for(const item of data)
        {
            if(item.id === props.foodItem._id)
            {
                food = item;
            }
            break;
        }

        if(food.length >0)
        {
            if(food.size === size)
            {
                await dispatch({
                    type:"UPDATE",
                    id:props.foodItem._id,           
                    qnt:qnt,
                    
                  }) 
                  return
            }
            else if(food.size !== size)
            {
                await dispatch({
                    type:"ADD",
                    id:props.foodItem._id,
                    name:props.foodItem.name,
                    price:finalPrice,
                    qnt:qnt,
                    size:size  
                  })
                  return
            }
            return
        }


      await dispatch({
        type:"ADD",
        id:props.foodItem._id,
        name:props.foodItem.name,
        price:finalPrice,
        qnt:qnt,
        size:size  
      })

    //   console.log(data);
    }

   let finalPrice = qnt*parseInt(options[size])
useEffect(()=>{
    setsize(priceRef.current.value)
},[])
   

    return (
        <>
            <div className="card" >
                <img src={props.foodItem.img} className="card-img-top car" alt="food" />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    
                    <p className="card-text">
                    Made with Authenticate Basmati Rice
                    {/* {props.description} */}
                    </p>
                    <div className='section'>
                    <select className="form-select m-2 h-100 bg-success rounded" onChange={(e)=>setqnt(e.target.value)}>
                            {
                                Array.from(Array(9),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className="form-select m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
                            {
                                priceoption.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div  className="btn btn-primary d-inline h-100 fs-6 m-2" onClick={handeladdtocart}>Buy</div>          
                        
                    </div>
                    <hr/>
                    <div>
                    <h5 className='d-inline h-100 fs-5'>Rs: {finalPrice}/-</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
