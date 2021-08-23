import Link from "next/link"
import Button from "@material-tailwind/react/Button"
import Input from "@material-tailwind/react/Input"
import Checkbox from "@material-tailwind/react/Checkbox"

export default function signIn() {
    return (
        <>
            <section className='bg-signIn-pattern bg-cover bg-no-repeat px-24 pt-24'>
                <section className='flex items-center'>
                    <Link href='/'>
                        <Button color="orange" buttonType="link" ripple="dark">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <path d="M18.7831 34.6324C19.0369 34.8621 19.3705 34.9835 19.7126 34.9708C20.0547 34.958 20.3782 34.8122 20.6143 34.5642C20.8503 34.3163 20.9802 33.986 20.9761 33.6437C20.9721 33.3013 20.8345 32.9742 20.5926 32.7319L9.65335 22.3124H35.4379C35.7859 22.3124 36.1198 22.1741 36.3659 21.928C36.6121 21.6818 36.7504 21.348 36.7504 20.9999C36.7504 20.6518 36.6121 20.318 36.3659 20.0718C36.1198 19.8257 35.7859 19.6874 35.4379 19.6874H9.65335L20.5926 9.26616C20.8345 9.02389 20.9721 8.69671 20.9761 8.3544C20.9802 8.0121 20.8503 7.68175 20.6143 7.43383C20.3782 7.1859 20.0547 7.04001 19.7126 7.02728C19.3705 7.01454 19.0369 7.13597 18.7831 7.36566L5.7981 19.7329C5.5139 20.0025 5.32894 20.3601 5.2731 20.7479C5.24107 20.915 5.24166 21.0868 5.27485 21.2537C5.33106 21.6408 5.516 21.9977 5.79985 22.2669L18.7831 34.6342V34.6324Z" fill="#FF6800"/>
                            </svg>
                        </Button>
                    </Link>
                    <h1 className='font-mulish text-utama-orange font-semibold text-3xl ml-4'>Hello, welcome back !</h1>
                </section>
                <section className='mt-24'>
                    <div className='w-1/3'>
                        <Input type='text' color='orange' placeholder='Username' />
                    </div>
                    <div className='w-1/3 mt-10'>
                        <Input type='text' color='orange' placeholder='Password' />
                    </div>
                    <a href="">Forget Password?</a>
                    <Checkbox color='orange' text='Remember me' id='checkbox' />
                </section>
            </section>
        </>
    )
}