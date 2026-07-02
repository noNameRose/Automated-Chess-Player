const LandingPage = () => { 
    return (
        <>
            <div className="max-w-[100vw] mx-auto flex flex-col items-center">
                <h1 className="font-bold text-7xl">AI Chess</h1>
                <div    
                    className="grid"
                    style={
                        {
                            width: "clamp(216px, 70vw, 800px)",
                            height: "clamp(72px, 60vw,300px)",
                            gridTemplateColumns: "repeat(15, 1fr)",
                            gridTemplateRows: "repeat(6, 1fr)",

                        }
                    }
                >
                    {(new Array(6)).fill(null).map((_, index) => {
                        let col = "";
                        let row = "";
                        if (index === 0) {
                            col = "3/14";
                            row = "2/3"
                        }
                        if (index === 1) {
                            col = "1/16";
                            row = "3/4"
                        }
                        if (index === 2) {
                            row = "4/5";
                            col = "3/14"
                        }
                        if (index === 3) {
                            row = "5/6";
                            col = "12/15"
                        }
                        if (index === 4) {
                            row = "5/7",
                            col = "4/5"
                        }
                        if (index === 5) {
                            row = "5/6";
                            col = "3/4"
                        }
                        return (
                            <div 
                                className="bg-black text-center" 
                                style={{
                                    gridColumn: col,
                                    gridRow: row
                                }}>
                                {`Item ${index}`}
                            </div>);
                    })
                    }
                </div>
            </div>
        </>
    );
};

export default LandingPage;