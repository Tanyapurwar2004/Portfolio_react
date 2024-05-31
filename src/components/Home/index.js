import LogoTitle from '../../assets/images/t.png';
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'n', 'y', 'a', ' ', 'P', 'u', 'r', 'w', 'a', 'r']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },4000)
    },[])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    {/* anya Purwar */}
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={26}
                    />
                </h1>
                <h2>Frontend Developer / Javascript Expert / Programmer</h2>
                <Link to="/contact" className='flat-button' >CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    );
}


export default Home