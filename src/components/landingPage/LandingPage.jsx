import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './landingPage.css'

const LandingPage = () => {
    const autoText = useRef();

    const writeMachine = (reference, textList, spd = 125) => {
        let wordIndex = 0;
        let text = '';
        let isDeleting = false;

        const write = () => {
            const current = wordIndex % textList.length;
            const fullText = textList[current];

            if(isDeleting) {
                text = fullText.substring(0, text.length - 1)
            }else{
                text = fullText.substring(0, text.length + 1)
            }

            reference.current.innerText = text;
            spd = 125;

            if(!isDeleting && text === fullText) {
                spd = 500;
                isDeleting = true;
            }else if (isDeleting && text === ''){
                spd = 500;
                isDeleting = false;
                wordIndex++;
            }

            setTimeout(() => write(), spd)
        }

        write()
    }

    const initWrite = () => {
        const textList = [
            "front-end developer", 
            "programmer",
            "self-taught"
        ];
        writeMachine(autoText, textList);
    }

    useEffect(() => {
        initWrite();
    }, [])

    return (
        <section className='landing'>
            <div className='landing__introduction'>
                <h1>Hello, I'm a <span ref={autoText} className='text-shadow'></span></h1>
                <h6 className='text-shadow'>Self-taught odin project student.</h6>
                <a href="#contact" className="neon-button">Contact me</a>
                <MdKeyboardArrowDown className="landing__arrow"/>
            </div>
        </section>
    )
}

export default LandingPage