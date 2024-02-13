import { useEffect } from "react";
import './Scoreboard.css';

function Scoreboard(){
    const Teams=["PUNJABI HOUSE","CHATTAMBINAADU","THENKASHIPATTANAM","CHOTTA MUMBAI"]
    useEffect(()=>{
        const fetchData = () => {
            fetch("https://script.google.com/macros/s/AKfycbxueuyWB7EDA64uftv5DiRTedVNySDPeG_YHNRjvM0zrddydMhO6x9ZaedUMS78fkZm/exec")
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        };

        // Call the API initially
        fetchData();

        // Call the API every 1 minute
        const interval = setInterval(fetchData, 60000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [])
    
    return(<>
        <div id="ScoreBoard">
            <h1>SCOREBOARD</h1>
            <div className="ScoreBoard-Scores">
                {
                    Teams.map((team,index)=>
                    <>
                        <div className="ScoreBoard-MainCon">

                            <div className="ScoreBoard-ScoreCard">
                                <p>{team}</p>
                                <p>0</p>
                            </div>
                            <div className="ScoreBoard-Details-Container">
                                <div className="ScoreBoard-Details">
                                    <p>Actor of CEC</p>
                                    <p>+50</p>
                                </div>
                                <div className="ScoreBoard-Details">
                                    <p>Actor of CEC</p>
                                    <p>+50</p>
                                </div>
                                <div className="ScoreBoard-Details">
                                    <p>Actor of CEC</p>
                                    <p>+50</p>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
                
                {/* <div className="ScoreBoard-MainCon">

                    <div className="ScoreBoard-ScoreCard">
                        <p>PUNJABI HOUSE</p>
                        <p>50</p>
                    </div>
                    <div className="ScoreBoard-Details-Container">

                        <div className="ScoreBoard-Details">
                            <p>Actor of CEC</p>
                            <p>+50</p>
                        </div>
                        <div className="ScoreBoard-Details">
                            <p>Actor of CEC</p>
                            <p>+50</p>
                        </div>
                        <div className="ScoreBoard-Details">
                            <p>Actor of CEC</p>
                            <p>+50</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </>)
}

export default Scoreboard;