import Link from 'next/link';

export default function Navbar() {
    const navs = [
        { text: 'Home', href: '/' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Why Us?', href: '/whyus' },
        { text: 'Contact', href: '/contact' },
        // { text: '', href: '' },
    ];
    
    return (
        <nav className='fixed justify-between items-center w-full flex top-0 left-0 px-24 pt-8 z-20'>
            <div>
                <h3 className='font-poppins text-2xl font-semibold text-utama-orange'>ScoreMaster</h3>
            </div>
            <div className='flex items-center'>
            <ul className='flex font-mulish text-utama-orange pr-8'>
                { navs.map(nav => (
                <li><Link href={nav.href}>
                <a className='mx-5 text-utama-orange hover:text-opacity-75'>{nav.text}</a>
                </Link></li>
                )) }
            </ul>
                <a href="/" className='px-8 mx-2 font-mulish text-utama-orange'>Sign In</a>
                <a href="/" className='p-2 px-8 mx-2 font-mulish bg-utama-orange text-utama-white rounded-full'>Sign Up</a>
            </div>
        </nav>
    )
}