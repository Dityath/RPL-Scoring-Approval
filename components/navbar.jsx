import Link from 'next/link';
import { withRouter } from 'next/router';
import Button from "@material-tailwind/react/Button";
import { useState, useEffect } from 'react';

function Navbar({ router }) {
    const [navbar, setNavbar] = useState(false);

    // const navs = [
    //     { text: 'Home', href: '/' },
    //     { text: 'Pricing', href: '/' },
    //     { text: 'Why Us?', href: '/' },
    //     { text: 'Contact', href: '/' },
    //     // { text: '', href: '' },
    // ];

    const scrollDown = ()=> {
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', scrollDown);
        return ()=>{
            window.removeEventListener('scroll', scrollDown);
        }
    }, [])
    
    return (
        <nav className={navbar ?'transition duration-300 shadow-lg bg-utama-white fixed justify-between items-center w-full flex top-0 left-0 px-24 py-4 z-20':'transition duration-300 fixed justify-between items-center w-full flex top-0 left-0 px-24 py-4 z-20'}>
            <div>
                <h3 className='font-poppins text-2xl font-semibold text-utama-orange'>ScoreMaster</h3>
            </div>
            <div className='flex items-center'>
                <ul className='flex font-mulish text-utama-orange pr-8'>
                    <li><Link href='/' passHref>
                        <Button color='orange' buttonType='link' className='mx-0.5 text-utama-orange font-mulish font-normal text-base capitalize' ripple='dark'>Home</Button>
                    </Link></li>
                    <li><Link href='/' passHref>
                        <Button color='orange' buttonType='link' className='mx-0.5 text-utama-orange font-mulish font-normal text-base capitalize' ripple='dark'>Pricing</Button>
                    </Link></li>
                    <li><Link href='/' passHref>
                        <Button color='orange' buttonType='link' className='mx-0.5 text-utama-orange font-mulish font-normal text-base capitalize' ripple='dark'>Why us?</Button>
                    </Link></li>
                    <li><Link href='/' passHref>
                        <Button color='orange' buttonType='link' className='mx-0.5 text-utama-orange font-mulish font-normal text-base capitalize' ripple='dark'>Contact</Button>
                    </Link></li>
                </ul>
                <Link href='/login/signIn' passHref><a className='p-2 px-8 mx-2 font-mulish bg-utama-orange text-utama-white rounded-full'>Sign In</a></Link>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);