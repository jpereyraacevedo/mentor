export const NavBar = () => {
    return(
        <header style={{display: "flex", justifyContent: "space-between", margin: "20px 0px 10px 0px"}}>
            <h2>W.</h2>
            <nav>
                <ul>
                    <li  style={{padding: "0px 25px"}}>Home</li>
                    <li  style={{padding: "0px 25px"}}>New</li>
                    <li  style={{padding: "0px 25px"}}>Popular</li>
                    <li  style={{padding: "0px 25px"}}>Trending</li>
                    <li  style={{padding: "0px 25px"}}>Caegories</li>
                </ul>
            </nav>
        </header>
    )
}