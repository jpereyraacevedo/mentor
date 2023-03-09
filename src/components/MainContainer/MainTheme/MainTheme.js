export const MainTheme = () => {
  return (
    <div style={{height: "100%",}}>
      <div style={{height: "50%"}}>
        <img src="https://images6.alphacoders.com/456/456498.jpg" style={{ width: "100%", objectFit: "cover", maxHeight: "100%",}} alt="dsd"/>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", height: "50%",}} >
        <h2 style={{ fontSize: "5rem", height: "100%", maxWidth: "50%", fontWeight: "700", color: "#01011B" }}>
          The Bright Future of Web 3.0?
        </h2>
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "space-around", maxWidth: "50%", height: "100%" }}>
          <p style={{ fontSize: "1.5rem", color: "#66656B" }}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But it is
            really fulfilling its promise?
          </p>
          <div style={{ cursor: "pointer", backgroundColor: "#f15d51", display: "inline-block", padding: "10px", color: "#FEFDF9", fontWeight: "700", width: "50%", textAlign: "center"}} >
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
};
