
function Navbar () {
    return (
        <>
        <nav className="w-full h-14 bg-indigo-200 flex justify-between
        px-4 md:px-4 items-center">
            <div className="text-2xl text-indigo-700 font-bold">Article</div>
            <ul>
                <li>Home</li>
                <li>New Post</li>
                <li>Profile</li>
            </ul>
            <div>Login/Signup</div>

        </nav>
        </>
    )
}

export default Navbar