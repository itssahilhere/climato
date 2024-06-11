import { ArrowArcLeft, Camera } from 'phosphor-react'
import React, { useState } from 'react'
import Card from '../component/card';
import trash from '../assets/earth (4).png'
import { useNavigate } from 'react-router-dom';


function OrderForm() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleCreateOrder = () => {
        // Show alert message
        alert('Your order is successful!');
        
        // Redirect to dashboard after 4 seconds
        
            navigate('/dashboard');
        
    };

    return (
        <div className='d-flex'>



            <div className='p-3 w-100'>

                <div className='text-white d-flex bg-dark rounded-3xl justify-content-between px-3 mb-3 mx-2' style={{ height: "8vh" }}>

                    <button className='d-flex align-items-center' onClick={() => setShow(prev => !prev)}>
                        {!show ? <img src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" width={50} />
                            : <ArrowArcLeft size={50} />}
                    </button>

                    <div className='h3 align-self-center m-0 p-0'>
                        Climato
                    </div>

                    <div className='d-flex align-items-center'>
                        <img src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg" width={50} className='rounded-circle' />
                    </div>
                </div>


                <div className='d-flex'>


                    {show && <div className='bg-dark m-3 text-white h4 d-flex flex-column rounded-3xl'>

                    <div className='my-auto p-5' onClick={() => navigate('/learn')}>Learn</div>
                        <div className='my-auto p-5' onClick={() => navigate('/order')}>Ecozones</div>
                        <div className='my-auto p-5' onClick={() => navigate('/dashboard')}>Dashboard</div>
                        <div className='my-auto p-5' onClick={() => navigate('/leaderboard')}>Leaderboards</div>
                        <div className='my-auto p-5' onClick={() => navigate('/reward')}>Rewards</div>
                        <div className='my-auto p-5' onClick={() => navigate('/history')}>Settings</div>
                    </div>}

                    <div className='bg-dark w-100 p-5 m-3 rounded-3xl d-flex flex-wrap' style={{ minHeight: "92vh" }}>
                        <form className='d-flex w-100'>
                            <div>
                                <label for="file">
                                    <Camera className='text-white border p-5 rounded-3xl' size={500} />
                                </label>
                                <input id='file' type='file' hidden />
                            </div>

                            <div className='flex-fill w-100 m-3 d-flex flex-column align-items-center'>
                                <input placeholder='Product Name' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <select placeholder='Category' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Category</option>
                                    <option value={"category 1"} className='text-dark'>Smartphone</option>
                                    <option value={"category 2"} className='text-dark'>Televisions</option>
                                    <option value={"category 3"} className='text-dark'>Laptops</option>
                                    <option value={"category 4"} className='text-dark'>Desktops</option>
                                    <option value={"category 5"} className='text-dark'>Other Electronic items</option>
                                    
                                </select>
                                <select placeholder='Collection' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Collection Type</option>
                                    <option value={"Collection 1"} className='text-dark'>Fully working</option>
                                    <option value={"Collection 2"} className='text-dark'>Semi-working</option>
                                    <option value={"Collection 3"} className='text-dark'>Not working</option>
                                    
                                </select>
                                <input placeholder='Ask price' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <input placeholder='Pincode' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <select placeholder='Collection' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Type of Pickup</option>
                                    <option value={"Collection 1"} className='text-dark'>Pickup</option>
                                    <option value={"Collection 2"} className='text-dark'>Self Drop</option>
                                </select>
                                <button className='text-white border w-25 p-2 rounded-3xl' onClick={handleCreateOrder}>Create Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm