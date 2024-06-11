import { ArrowArcLeft } from 'phosphor-react'
import React, { useState } from 'react'
import Card from '../component/card';
import trash from '../assets/earth (4).png'
import blog5 from '../assets/light.jpg'
import blog1 from '../assets/blog-card-2.png'
import blog2 from '../assets/blog-card-3.png'
import blog3 from '../assets/blog-card-5.png'
import blog4 from '../assets/blog-card-6.png'
import blog6 from '../assets/pexels-tom-fisk-3174350.jpg'
import blog11 from '../assets/iamnot.png'

import { useNavigate } from 'react-router-dom';
function Learn() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const blogs = [
        { "image": blog1, desc: "How to generate money from selling your scrap" },
        { "image": blog2, desc: "How to navigate in the modern world and manage e-waste" },
        { "image": blog3, desc: "How to recycle ypur old tv to make a quick buck" },
        { "image": blog4, desc: "Did you know about e-waste and it's harmful effects" },
        { "image": blog11, desc: "How much e-waste india generate?" },
        { "image": blog5, desc: "How to we process your e-waste" },
        { "image": trash, desc: "Market size of e-waste" },
        { "image": blog4, desc: "How to get rid of your old phone in 2024" }
    ]

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
                        {blogs?.map(item => <Card
                            image={item.image}
                            description={item.desc}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn