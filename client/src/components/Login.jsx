import { getRedirectUrl } from "../utils/auth";
import Controls from "./Controls";

function Login() {
    
    const redirect_url = getRedirectUrl();

    return (
        <div className='grid place-content-around h-screen w-full center content-center font-semibold'>
            <div className='w-6/7 text-center'>
                <h1 className='text-6xl mb-12 font-bold'>Get started</h1>
                <p className='text-xl'>
                    Link your Spotify profile
                    <br/>And get ready to party.
                </p>
                <p className='text-base mt-8 mb-6'>Everything is stored within your browser :)</p>
                <button className='rounded-lg bg-green-400 text-black p-3 my-5 font-bold text-xl mb-24' onClick={() => {
                    window.location.href = redirect_url;
                }}>Connect with Spotify</button>
                <Controls/>
            </div>
        </div>
    )
}

export default Login