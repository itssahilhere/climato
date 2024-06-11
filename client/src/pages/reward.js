import { ArrowArcLeft } from 'phosphor-react'
import React, { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import Card from '../component/card';
import trash from '../assets/earth (4).png'
import blog1 from '../assets/blog-card-2.png'
import blog2 from '../assets/blog-card-3.png'
import blog3 from '../assets/blog-card-5.png'
import blog4 from '../assets/blog-card-6.png'
import blog5 from '../assets/blog-card-44.png'
import blog6 from '../assets/aa (1).png'
import blog7 from '../assets/cc.png'
import blog8 from '../assets/bb.png'
import blog9 from '../assets/garbage.png'
import blog10 from '../assets/woods.png'
import blog11 from '../assets/iamnot.png'



function Reward() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const blogs = [
        { "image": blog9, desc: "GREEN LEARNER" },
        { "image": blog10, desc: "RECYCLE RANGER" },
        { "image": blog5, desc: "ECO SERGEANT" },
        { "image": blog9, desc: "E-WARRIOR" },
        { "image": blog5, desc: "ECO CAMPION" },
        { "image": blog6, desc: "PLANET PROTECTOR" },
        { "image": blog7, desc: "DISCIPLE" },
        { "image": blog8, desc: "SAGE" }
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
            {/* Static Slider Input Range */}
            
        </div>
    )
}

export default Reward
