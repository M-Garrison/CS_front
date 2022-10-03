import React, {useState} from 'react';

const DropDown = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const Links = [
        {name: <ion-icon name="home-outline"></ion-icon>, link:"https://www.mitchell-g.com/"},
        {name: <ion-icon name="trail-sign-outline"></ion-icon>, link:"https://www.latlong.net/"},
        {name: <ion-icon name="logo-linkedin"></ion-icon>, link:"https://www.linkedin.com/in/m-garrison/"},
        {name: <ion-icon name="logo-github"></ion-icon>, link:"https://www.github.com/M-Garrison/"},
    ];

    return (
        
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-xl cursor-pointer flex items-center">
                <br />
                <ion-icon className="pl-5" name="earth-outline"></ion-icon>
                GEOCACHING
                </div>
            <div onClick={() => setIsExpanded(!isExpanded)} className="dropdown-menu text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={isExpanded ? "close" : "reorder-four-outline"}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isExpanded ? "top-20" :"top-[-300px]"}`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
            {/* <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-gray-400 hover:bg-gray-500 navbar px-4 py-2 text-white rounded-lg">
                Dropdown
            </button>
            {isExpanded &&
                <div className="bg-gray-400 px-4 py-2 text-white rounded-lg">
                    <ul>
                        Hello!
                    </ul>
                </div>
            } */}
        </div>
    )
}

export default DropDown