import { useState, useEffect } from "react";
import MainBar from "./MainBar";
import History from "./History";


const SideBar = (props) => {
    const [buttonHovered, setButtonHovered] = useState(0);
    const [history, setHistory] = useState([]);
    // console.log("Props data" , props.data);
    let apiData = props.data;
    let menu = props.menu;
    // console.log(apiData);

    const handleSideButton = (buttonNo) => {
        // console.log("Button hovered");
        // console.log(buttonNo);
        setButtonHovered(buttonNo);
        // console.log(buttonNo);
        // console.log(apiData[("Sheet"+buttonHovered)]);
    };

    const callExecuteEndpoint = async (buttonNo) => {
        let option = menu.split(" ").join("_").toLowerCase();
        const sheetNo = buttonNo.startsWith("Sheet") ? buttonNo.substring(5) : buttonNo;
        const url = `http://127.0.0.1:5000/execute/${option}/${sheetNo}`
        const data = await fetch(url);
        const json = await data.json();
        console.log("history",json);
        setHistory(json);
    }
    const handleSideButtonClick = (buttonNo) => {
        // console.log("Menu : ",menu);
        // console.log("Button clicked : ", buttonNo);
        callExecuteEndpoint(buttonNo); 
    }; 

    return (
        <div className="body-container">
            <div className="side-bar-container">
                {(menu.toLowerCase() === "Seva Login".toLowerCase() || menu.toLowerCase() === "Credit Card".toLowerCase()) ? (apiData && Object.keys(apiData).sort((a, b) => {
                    let val1 = parseInt(a);
                    let val2 = parseInt(b);
                    return val1 - val2;
                }).map((sheet) => (<button key={sheet} onClick={() => handleSideButtonClick(sheet)} onMouseOver={() => handleSideButton(sheet)} className="button"> {sheet}</button>))) : (apiData && Object.keys(apiData).sort((a, b) => {
                    let val1 = parseInt(a.substring(5));
                    let val2 = parseInt(b.substring(5));
                    return val1 - val2;
                }).map((sheet) => {
                    return (<button key={sheet} onClick={() => handleSideButtonClick(sheet)} onMouseOver={() => handleSideButton(sheet.substring(5))} className="button"> {sheet.substring(5)}</button>);
                }))
                }
            </div>
            {(menu.toLowerCase() === "Seva Login".toLowerCase() || menu.toLowerCase() === "Credit Card".toLowerCase()) ? (buttonHovered !== 0 && <MainBar key={apiData[buttonHovered]}  data={apiData[buttonHovered]} isDataArray={false}></MainBar>) : ( buttonHovered !== 0 && <MainBar key={apiData[buttonHovered]} data={apiData[("Sheet" + buttonHovered)]} isDataArray={true}></MainBar>)}
            <History className="history" data={history}></History>

        </div>
    );
}
export default SideBar;




