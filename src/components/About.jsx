import React from 'react';
import '../index.css'

function About(){
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
    return (
    <>
        <div className="container text-stone-200" style={{display : "flex"}}>
        <div className="row ">
            <div className="col-md-6 x y">
                <div className="content header w">
                    <p className='font-bold text-5xl mb-8 mt-4'>Welcome to VehicleQuest</p>
                    <p className='mb-12 text-lg'>Welcome to our premier enterprise, your ultimate destination for high-quality transportation solutions. Whether you are soaring through the skies in a state-of-the-art plane, cruising the open seas on a luxurious boat, experiencing the thrill of the open road on a powerful motorbike, or enjoying the comfort and style of a sophisticated car, we have the perfect vehicle to meet your needs. Our commitment to excellence ensures that each product is crafted with the highest standards of safety, performance, and innovation. Explore our diverse range of vehicles and discover the unparalleled experience of traveling with us. Your journey begins here!</p>
                    <img src='https://blog-images.carshop.co.uk/2019/06/bestcarshowroom.png'/>
                </div>
            </div>
            <div className="col-md-6 x y">
                <div className="content">
                <p className='font-bold text-5xl mt-4 mb-8'>Want to Reach us?</p>
                    <div className='row'>
                        <div className='col-6'>
                        <p className='text-3xl'>Opening hours :</p>
                        </div>
                        <div className='col-6'>
                        <ul className='text-lg'>
                        <li>Monday : 8:30 am to 8 pm</li>
                        <li>Tuesday : 8:30 am to 8 pm</li>
                        <li>Wednesday : 8:30 am to 3 pm</li>
                        <li>Thursday : 8:30 am to 3 pm</li>
                        <li>Friday : 8:30 am to 1 pm</li>
                        <li>Saturday : Closed</li>
                        <li>Sunday : Closed</li>
                    </ul>
                        </div>
                    </div>
                    <p className='mt-5 mb-7 text-3xl'>Come visit us at : 69 London Street, Toronto</p>

                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg'/>
                </div>
            </div>
        </div>
    </div>
    </>)
    


}
    






export default About;