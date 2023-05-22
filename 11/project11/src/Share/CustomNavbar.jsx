import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import '../style/CustomNavbar.css';

const CustomNavbar = () => {
    const [activeHeader,setActiveHeader] = useState(false)
    const {user,logout} = useContext(AuthContext)
   
    
    const DeskotpNav = <>
                        <li className='mt-2' style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Home</Link></li>

                       
                       <li className='mt-2' style={{listStyle:'none'}}><Link  style={{textDecoration:'none',color:'white',fontWeight:'600'}} to='/alltoys'>All Toys</Link></li>

                       {user?.email && <li className='mt-2' style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white',fontWeight:'600'}} to='/mytoys'>My Toys</Link></li> 
}
                        {user?.email && <li className='mt-2' style={{listStyle:'none'}}><Link to='/addtoys' style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Add A Toys</Link></li> }
                        

                        <li className='mt-2' style={{listStyle:'none'}}><Link to='/blogs' style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Blogs</Link></li>

                       

                        {user?.email ? <li onClick={()=>logout ()}  className='mt-2' style={{listStyle:'none',color:'white',fontWeight:'600'}}>Logout</li>
                        :
                        <li className='mt-2' style={{listStyle:'none'}}><Link to='/login' style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Login</Link></li>}

                        <li className='mt-2' style={{listStyle:'none'}}>
                            {user && <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={user?.photoURL} alt="" />}
                        </li>
 
                    </>


    const Mobile = <>
                    <li className='mt-2' style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Home</Link></li>


                    <li className='mt-2' style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white',fontWeight:'600'}} to='/alltoys'>All Toys</Link></li>


                    <li className='mt-2' style={{listStyle:'none'}}><Link  style={{textDecoration:'none',color:'white',fontWeight:'600'}} to='/mytoys'>My Toys</Link></li>


                    <li className='mt-2' style={{listStyle:'none'}}><Link to='/addtoys' style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Add A Toys</Link></li>

                    
                    <li className='mt-2' style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Blogs</Link></li>

                        

                        {user?.email ? <li onClick={()=>logout ()}  className='mt-2' style={{listStyle:'none',color:'white',fontWeight:'600'}}>Logout</li>
                        :
                        <li className='mt-2' style={{listStyle:'none'}}><Link to='/login' style={{textDecoration:'none',color:'white',fontWeight:'600'}}>Login</Link></li>}

                        <li className='mt-2' style={{listStyle:'none'}}>
                        {user && <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={user?.photoURL} alt="" />}
                        </li>
                    </>
    return (
        <Container fluid style={{background:'#54092A'}} className='header'>
            <Container>
                <Row>
                    <Col>
                        <div className='navigation'>
                            <div style={{height:'80px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <h3 style={{color:'white'}}>Sp<span style={{color:'tomato'}}>o</span>rts <span style={{color:'tomato'}}>M</span>arket</h3>
                                <div className='DesktopMenu'>
                                    <ul className='d-flex gap-3'>
                                        {DeskotpNav}
                                    </ul>
                                </div>
                                <div className='hamburger' onClick={()=>setActiveHeader(!activeHeader)}>
                                    <FontAwesomeIcon icon={faBars} style={{color:'white',fontSize:'24px'}}  />
                                </div>
                                <div className={activeHeader ? 'MobileMenu activeheader' : 'MobileMenu'}>
                                    <ul>
                                        {Mobile}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CustomNavbar;