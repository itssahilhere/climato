import { ArrowArcLeft } from 'phosphor-react'
import React, { useState } from 'react'
import defaultProfilePic from '../assets/propic.png'; // Import your default profile picture
import { useNavigate } from 'react-router-dom';
function LeaderBoard() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

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

                    <div className='bg-dark w-100 p-5 m-3 rounded-3xl' style={{ minHeight: "92vh" }}>
                        <table border="1" className='table table-dark p-3 text-center table-striped'>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Alice</td>
                                    <td>670</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Bob</td>
                                    <td>665</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Charlie</td>
                                    <td>660</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Diana</td>
                                    <td>655</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Ethan</td>
                                    <td>650</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Fiona</td>
                                    <td>645</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Greg</td>
                                    <td>640</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Hannah</td>
                                    <td>635</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Ivan</td>
                                    <td>630</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Jack</td>
                                    <td>625</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Kate</td>
                                    <td>620</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Leo</td>
                                    <td>615</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Mia</td>
                                    <td>610</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Nathan</td>
                                    <td>605</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Olivia</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Peter</td>
                                    <td>595</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard