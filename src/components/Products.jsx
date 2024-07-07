import '../index.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import videoCar from '../videos/car.mp4';
import videoMotor from '../videos/motor.mp4'
import videoBoat from '../videos/boat.mp4'
import videoPlane from '../videos/plane.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import { NavLink, useMatch, useResolvedPath } from "react-router-dom"


function Products(){
    
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
              if (entry.isIntersecting){
                entry.target.classList.add('show');
              } else {
                entry.target.classList.remove('show');
              }
            });
          });
          const x = document.querySelectorAll('.x');
          
          x.forEach((el) => observer.observe(el));
    })

    return(
    <>
    <div className='container'>
        <div className='row'>
            <p className='text-red-500 text-center text-5xl mt-3 mb-10'>What are you looking for ?</p>
        </div>
        <div className='row'>
            <div className='col-md-6 x y'>
            <CustomLink to ='/shop' style={{ cursor: 'pointer' }}>
            <Card className='card-margin'>
      <HoverVideoPlayer
      videoSrc={videoCar}
      pausedOverlay={
       
            <img
          src="https://miro.medium.com/v2/resize:fit:1358/1*sf4nQKh1ArnsfbT1uFly4w.jpeg"
          alt="car image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
       
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
     
    </Card>
    </CustomLink>
            </div>
            <div className='col-md-6 x y'>
            <CustomLink to ='/shop' style={{ cursor: 'pointer' }}>
            <Card className='card-margin'>
            <HoverVideoPlayer
      videoSrc={videoMotor}
      pausedOverlay={
       
            <img
          src="https://www.confused.com/-/media/confused/articles/bike-insurance/types-of-motorbikes-article-image.jpg?la=en-gb&h=553&w=830&hash=5CEEE9B3026C201E51582971E135771C"
          alt="car image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
       
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
     
          </Card>
          </CustomLink>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 x y'>
            <CustomLink to ='/shop' style={{ cursor: 'pointer' }}>
            <Card className='card-margin'>
            <HoverVideoPlayer
      videoSrc={videoBoat}
      pausedOverlay={
       
            <img
          src= "https://t3.ftcdn.net/jpg/05/10/23/98/360_F_510239814_97EdkM18z8iUcQkyD68zNw1lgZ1o06Jj.jpg"
          alt="car image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
       
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
          </Card>
          </CustomLink>
            </div>
            <div className='col-md-6 x y'>
            <CustomLink to ='/shop' style={{ cursor: 'pointer' }}> 
            <Card className='card-margin'>
            <HoverVideoPlayer
      videoSrc={videoPlane}
      pausedOverlay={
       
            <img
          src= "https://www.travelandleisure.com/thmb/Nq9fBPWYGxNEmUvkK3P1b96F7XU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/composite-heathrow-airport-PLANEINSKY0322-f4e3d471b6b64c84bb297e5e7347076e.jpg"
          alt="car image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
       
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
          </Card></CustomLink>
            </div>
        </div>
    </div>
    </>)
}

export default Products;

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <p className={isActive ? "active" : ""}>
        <NavLink to={to} {...props}>
          {children}
        </NavLink>
      </p>
    )
  }