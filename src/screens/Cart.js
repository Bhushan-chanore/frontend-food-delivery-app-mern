import React from 'react'
import Navbar from '../components/Navbar';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from '../image/trash.gif'

function Cart() {

    // taking context reducer for cart
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div className='fs-1 text-success text-center m-5 w-100'>
                The Cart is Empty
            </div>
        )
    }

    const handelCheckOut = async () => {
        console.log('Fetching data...');
        let userEmail = localStorage.getItem("userEmail");
        console.log('User Email:', userEmail);
        try {
            const response = await fetch("https://backend-food-delivery-app-mern.vercel.app/api/orderData", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                  order_data: data,
                  email: userEmail,
                  order_date: new Date().toDateString()
                })
              });
              
            console.log('Response status:', response.status);
    
            if (response.status === 200) {
                dispatch({ type: "DROP" })
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (

        <>
            <Navbar />
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className='bg-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-primary'>
                        {
                            data.map((food, index) => (
                                <tr key={index}>
                                    <th scope='row' className='text-success'>{index + 1}</th>
                                    <td className='text-success'>{food.name}</td>
                                    <td className='text-success'>{food.qnt}</td>
                                    <td className='text-success'>{food.size}</td>
                                    <td className='text-success'>{food.price}</td>
                                    <td className='text-success'>
                                        
                                        <button className='btn p-0'>
                                            <img
                                                src={trash}
                                                alt='delete'
                                                onClick={() => {
                                                    dispatch({ type: "REMOVE", index: index });
                                                }}
                                            />
                                        </button>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className='fs-2 text-success'>totalPrice: {totalPrice}/-</div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handelCheckOut}>Check Out</button>
                </div>
            </div>

        </>
    )
}

export default Cart;
