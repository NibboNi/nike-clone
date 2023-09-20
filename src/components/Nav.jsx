import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    const [ openMenu, setOpenMenu ] = useState(false);
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map( item => (
                        <li key={item.label}>
                            <a href={item.href} className='fonts-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='lg:hidden' >
                    {
                        openMenu ?
                        (
                            document.body.style.overflow = "auto",
                            <img src={hamburger} alt='Menu' width={25} height={25} onClick={() => setOpenMenu(!openMenu)} />
                            )
                        :
                        (
                            document.body.style.overflow = "hidden",
                            <div className='bg-white absolute w-full top-0 left-0 h-screen flex flex-col items-center justify-center gap-3 list-none'>
                                {navLinks.map( item => (
                                    <li key={item.label}>
                                        <a href={item.href} className='fonts-montserrat leading-normal text-lg text-slate-gray' onClick={() => setOpenMenu(!openMenu)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    );
};

export default Nav;