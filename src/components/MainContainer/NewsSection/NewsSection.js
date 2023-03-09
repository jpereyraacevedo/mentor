export const NewsSection = () => {
  return (
    <div style={{ backgroundColor: "#00001A", color: "white", height: "100%", padding: "30px" }}>
      <h3 style={{color: "#EEA34F", fontSize: "2.5rem"}}>New</h3>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-araund" , height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-araund" , height: "100%" }}>
           <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#F2F2F4"}}>Hydrogen VS Electric Cars</h4>
            <p style={{fontSize: "1.1rem", color: "#9292A8"}}>Will Hydrogen-fueled ever catch up to EVs? </p>
          </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-araund" , height: "100%" }}>
          <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#F2F2F4"}}>The Downsides of AI Artistry</h4>
            <p style={{fontSize: "1.1rem", color: "#9292A8"}}>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>  
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-araund" , height: "100%" }}>
           <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#F2F2F4"}}>Is VC Funding Drying Up?</h4>
            <p style={{fontSize: "1.1rem", color: "#9292A8"}}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p> 
        </div>
      </div>
    </div>
  );
};
