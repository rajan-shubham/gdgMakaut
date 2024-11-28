const Header = () => {
    return (
        <div className="bg-gray-900 fixed top-0 w-full flex justify-between text-white z-10">
            <div className="flex justify-center items-center space-x-6">
                <h1 className="py-2 px-4 text-4xl">GDG MAKAUT</h1>
            </div>
                <div className="bg-gray-900 py-4 flex justify-end">
                    <ul className="flex space-x-6">
                        <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#about">Home</a></li>
                        <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#skill">Service</a></li>
                        <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#contact">Contact</a></li>
                        <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#contact">Log In</a></li>
                    </ul>
                </div>
        </div>
    );
};

export default Header;