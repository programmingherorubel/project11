import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const SingleCategoryData = ({singleData}) => {
    const {user} = useContext(AuthContext)

    const informtaion = ()=>{
        if(!user?.email){
            toast.warning('You have to log in first to view details', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const {_id,name,sallerName,email,category,price,ratings,quantity,imgUrl,description} = singleData || {}
    return (
        <Col lg={3} md={4} sm={6} className='mx-auto' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
            <div className='border border-1 rounded-1 p-2 m-2'>
                <img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={imgUrl} className='img-fluid' alt="" /> <hr />
                <h6 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center' style={{color:'#54092A'}}>{name}</h6>
                <div data-aos="fade-up"data-aos-anchor-placement="top-bottom" style={{display:"flex",justifyContent:'space-between',padding:'0px 10px'}}>
                <Rating
                            placeholderRating={ratings}
                            emptySymbol={<i className="text-warning fa-sharp fa-regular fa-star"></i>}
                            placeholderSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                            fullSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                        />
                     <h6 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center' style={{color:'#54092A'}}><FontAwesomeIcon icon={faDollar}/> {price}</h6>
                </div>
               
                <div data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center'><button 
                onClick={()=>informtaion()}
                className='btn mt-3 mx-2' style={{background:"#54092A"}}><Link  to={`/addtoys/${_id}`} style={{textDecoration:'none',color:'white'}}>View Details</Link></button></div>
            </div>
        </Col>
    );
};

export default SingleCategoryData;