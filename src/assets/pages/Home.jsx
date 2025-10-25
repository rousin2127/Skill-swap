import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=' w-11/12 m-auto'>
            <HeroSlider ></HeroSlider>
            <div>
                <h3 className='font-bold md:text-3xl mt-5'>Popular Skills</h3>
                <div>
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default Home;