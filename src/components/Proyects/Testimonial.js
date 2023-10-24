import React from 'react';


const Testimonial = ({ name, text, image, bussiness, currentTestimonial }) => {


    return (
        <li className="bg-dark-custom text-white h-[80%] p-4 mt-7 ml-20 mr-[20%] w-[80%] shrink-0 relative shadow-[4px_4px_10px_0px_rgba(0,0,0,0.4)] transition-transform ease-out duration-500" style={{transform : `translateX(-${currentTestimonial*135}%)`}}>
            <div className=" w-[45%] flex h-[22%] bg-dark-custom -left-10 -top-6 absolute shadow-[4px_4px_10px_0px_rgba(0,0,0,0.4)]">
                <img src={image} alt={name} className="w-[23%] h-full object-cover border-r-[2px] border-red-custom" />
                <div className=' justify-center flex-col flex pl-4'>
                    <h3 className=" font-bold ">{name}</h3>
                    <h5 className=" font-thin text-sm">{bussiness}</h5>
                </div>
                
            </div>
            <div className="mt-12 mb-4 pl-10 pr-10">
                {text}
            </div>
        </li>
    );
};

export default Testimonial;