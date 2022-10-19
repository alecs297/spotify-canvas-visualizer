function Controls({defaultHidden=false, helpRef}) {

    return (
        <div className="center text-center font-semibold cursor-default" ref={helpRef} hidden={defaultHidden} tabIndex={0}>
            <h2 className="text-3xl mb-6">Controls</h2>
            <ul>
                <li className="m-3">
                    <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 align-middle text-xs aspect-video w-14">Arrows</div>
                    <span className="align-middle">Set number of canvas</span>
                </li>
                <li className="m-3">
                    <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 align-middle text-xs aspect-square w-8">F</div>
                    <span className="align-middle">Toggle Fullscreen</span>
                </li>
                <li className="m-3">
                    <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 align-middle text-xs aspect-square w-8">M</div>
                    <span className="align-middle">Cycle mirror mode</span>
                </li>
                <li className="m-3">
                    <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 align-middle text-xs aspect-square w-8">S</div>
                    <span className="align-middle">Force canvas re-sync</span>
                </li>
                <li className="m-3">
                    <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 align-middle text-xs aspect-square w-8">L</div>
                    <span className="align-middle">Log out</span>
                </li>
            </ul>
            <div className="text-md text-gray-400 my-8">
                You can toggle this popup at any time by pressing
                <div className="bg-gray-600 inline-block border border-black-10 m-2 p-2 text-white align-middle text-xs aspect-square w-8">H</div>
            </div>
        </div>
    )
}

export default Controls;