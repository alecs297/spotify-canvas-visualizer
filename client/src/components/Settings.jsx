import { useState } from "react";

export default function Settings({publicToken, setPublicToken}) {

    const [showSettings, setShowSettings] = useState(false);
    const defaultToken = import.meta.env.VITE_CLIENT_ID;

    return (
        <div className="w-full mb-12">
            <span onClick={() => setShowSettings(true)} className="cursor-pointer text-xl font-bold underline">Edit settings</span>

            {showSettings && (
                <div className="w-full px-16 py-4 min-h-screen text-left fixed top-0 left-0 bg-black">
                    <div className="flex my-4">
                        <h1 className="text-4xl">Settings</h1>
                        <div className="flex-grow"></div>
                        <div className="text-4xl cursor-pointer font-mono" onClick={() => setShowSettings(false)}>x</div>
                    </div>
                    
                    <h2 className="text-3xl my-2">Public Token (<span onClick={() => setPublicToken(defaultToken)} className="underline">reset</span>)</h2>
                    <div className="block mb-8 space-y-2">
                        {
                            publicToken === defaultToken && (
                                <div className="text-white">Default token is used</div>
                            )
                        }
                        <input className="px-2 text-black w-full rounded" value={publicToken} onChange={(e) => {setPublicToken(e.target.value)}} />
                        <p className="text-gray-400">Your public token is stored in your browser's <a className="text-white underline" href="https://javascript.info/localstorage" target={"_blank"}>localStorage</a>, and is only sent directly to Spotify to gather your <span className="text-white">"Now Playing"</span> status. Your private token isn't required, as a result your session will expire after roughly one hour.</p>
                    </div>

                    <h2 className="text-3xl my-2">Setup</h2>
                    <div className="w-full space-y-2">
                        <h3 className="text-2xl text-white mt-4">Why</h3>
                        <p className="text-gray-400">Since this web-app uses an unofficial Spotify API endpoint, it cannot be submitted for verification. In order for someone to use a Spotify unverified app, their account needs to be registered as a test user.</p>
                        <p className="text-gray-400">Adding test users to an application is a manual process with limited slots. Setting up the visualizer using your own Spotify app token bypasses the need of registering your account to the default token.</p>
                        
                        <h3 className="text-2xl text-white mt-4">Obtaining your public token</h3>
                        <ol className="list-decimal list-inside space-y-4">
                            <li className="text-xl">
                                <h3 className="inline">Accessing the developer portal</h3>
                                <p className="text-gray-400 text-base">Visit the <a className="text-white underline" href="https://developer.spotify.com/dashboard/" target={"_blank"}>Spotify Developer Portal</a> and login with your Spotify account.</p>
                            </li>
                            <li className="text-xl">
                                <h3 className="inline">Creating a new application</h3>
                                <p className="text-gray-400 text-base">Click the <span className="text-white">"Create an app"</span> button in the top right corner.</p>
                            </li>
                            <li className="text-xl">
                                <h3 className="inline">Setting up your application</h3>
                                <p className="text-gray-400 text-base">Give your application a name and description, then head to the <span className="text-white">"Edit Settings"</span> button. Set the redirect URI to <code className="text-white select-all">{window.location.href}</code> and save your changes.</p>
                            </li>
                            <li className="text-xl">
                                <h3 className="inline">Obtaining your public token</h3>
                                <p className="text-gray-400 text-base">Copy the <span className="text-white">"Client ID"</span> from the <span className="text-white">"Overview"</span> tab and paste it into the input field above.</p>
                            </li>
                            <li className="text-xl">
                                <h3 className="inline">Good to go</h3>
                                <p className="text-gray-400 text-base">Now you can use your own Spotify application token to access the <span className="text-white">visualizer</span>.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            )}
        </div>
    )
}