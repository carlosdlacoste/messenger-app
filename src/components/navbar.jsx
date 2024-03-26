import logo from "../assets/logo.svg"
export const NavBar = () => {
    return(
        <>
            <nav className="bg-green-500">
                <div className="flex items-center justify-center p-3">
                    <img className="w-7 h-6 text-cyan-400" src={logo} alt="Logo Messenger" />
                    <h1 className="text-xl">Messenger API</h1>
                </div>
            </nav>
        </>
    )
}