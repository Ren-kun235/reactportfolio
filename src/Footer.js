import React from 'react';
import Icons from './icons';

const Footer = () => (
	<footer className="footer">
        <h2 id="Contact">Contact</h2>
            <ul className='contactInfo'>
                <p className='info'>Phone: 
                    <a className='links' href="(651) 231-6468">(651) 231-6468</a>
                </p>
                <p className='info'>E-mail: 
                    <a className='links' href="changleng651@gmail.com">changleng651@gmail.com</a>
                </p>
                <h1 className='info'>
                    <a className='links' href="https://github.com/Ren-kun235">
                    <Icons icon="fa-brands fa-square-github" />
                    </a>
                </h1>
                <h1 className='info'>
                    <a className='links' href="https://www.linkedin.com/in/leng-chang-577097177/">
                        <Icons icon="fa-brands fa-linkedin" />
                    </a>
                </h1>
            </ul>
	</footer>
);

export default Footer;
