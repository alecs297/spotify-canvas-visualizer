function Controls({defaultHidden=false, helpRef}) {

    return (
        <div className="center text-center font-semibold" ref={helpRef} hidden={defaultHidden} tabIndex={0}>
            <h2 className="text-3xl mb-6">Controls</h2>
            <ul>
                <li className="p-1 m-3">
                    <span className="bg-gray-600 border border-black-10 p-2 m-2 text-xs">Arrows</span>
                    Change canvas count
                </li>
                <li className="p-1 m-3">
                    <span className="bg-gray-600 border border-black-10 p-2 m-2 text-xs">F</span>
                    Toggle Fullscreen
                </li>
                <li className="p-1 m-3">
                    <span className="bg-gray-600 border border-black-10 p-2 m-2 text-xs">M</span>
                    Cycle mirror mode
                </li>
                <li className="p-1 m-3">
                    <span className="bg-gray-600 border border-black-10 p-2 m-2 text-xs">L</span>
                    Log out
                </li>
            </ul>
            <p className="text-md text-gray-400 my-8">
                You can toggle this popup at any time by pressing
                <span className="bg-gray-600 border border-black-10 p-1 m-2 text-white text-xs">H</span>
            </p>
        </div>
    )
}

export default Controls;