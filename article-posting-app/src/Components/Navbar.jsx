
function Navbar () {
    return (
        <>
        <nav className="w-full h-14 bg-indigo-200 flex justify-between
        px-4 md:px-4 items-center">
            <div className="text-2xl text-indigo-700 font-bold">Article</div>
            <ul className="md:flex hidden font-semibold gap-4">
                <li className = "max-[10px] cursor-pointer">Home</li>
                <li className = "max-[10px] cursor-pointer">New Post</li>
                <li className = "max-[10px] cursor-pointer">Profile</li>
            </ul>
            <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
                <button className="md:hidden">login/signup</button>
            </div>

        </nav>
        </>
    )
}

export default Navbar