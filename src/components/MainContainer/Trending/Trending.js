export const Trending = () => {
    return (
        <section style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows:"1fr"}}>
            <div style={{ display: "flex"}}>
                <img src="https://img.freepik.com/premium-photo/blue-purple-technology-circuit_73426-205.jpg" alt="img" style={{width: "125px", height:"175px", objectFit: "cover",}} />
                <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around", paddingLeft: "20px"}}>
                    <p style={{color: "#C5C4CC", fontSize: "2em", fontWeight: "700"}}>01</p>
                    <p style={{color: "#000011", fontSize: "1.5em", fontWeight: "700"}}>Reviving Retro PCs</p>
                    <p style={{color: "#939297"}}>What happens when old pcs are given modern updates?</p>
                </div>
            </div>
            <div style={{ display: "flex"}}>
                <img src="https://img.freepik.com/premium-photo/blue-purple-technology-circuit_73426-205.jpg" alt="img" style={{width: "125px", height:"175px", objectFit: "cover",}} />
                <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around", paddingLeft: "20px"}}>
                    <p style={{color: "#C5C4CC", fontSize: "2em", fontWeight: "700"}}>02</p>
                    <p style={{color: "#000011", fontSize: "1.5em", fontWeight: "700"}}>Top 10 Laptops of 2022</p>
                    <p style={{color: "#939297"}}>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div style={{ display: "flex"}}>
                <img src="https://img.freepik.com/premium-photo/blue-purple-technology-circuit_73426-205.jpg" alt="img" style={{width: "125px", height:"175px", objectFit: "cover",}} />
                <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around", paddingLeft: "20px"}}>
                    <p style={{color: "#C5C4CC", fontSize: "2em", fontWeight: "700"}}>03</p>
                    <p style={{color: "#000011", fontSize: "1.5em", fontWeight: "700"}}>The Growth of Gaming</p>
                    <p style={{color: "#939297"}}>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </section>
    )
}