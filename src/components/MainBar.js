import { useEffect, useState } from "react";
const MainBar = (props) => {
    // let data = props.data;
    // let isDataArray = props.isDataArray; 
    const[data,setData] = useState([]);
    const[isDataArray,setIsDataArray] = useState(false);

    useEffect(()=>{
        setData(props.data);
        setIsDataArray(props.isDataArray);
    },[props.data, props.isDataArray]);
    return (
        <div className="main-area">
            { isDataArray && data? 
                (data.map(row => (
                    <div className="one-person-container" key={row["Proof_no"]}>
                        <p>Name : {row?.Name}</p>
                        <p>Proof : {row?.Proof}</p>
                        <p>Proof No : {row?.Proof_no}</p>
                    </div>
                )))
                :  (<div className="one-person-container" key={data}>
                        <p>{data}</p>
                    </div>)
            }
            {/* {data.map((row) => {
                Object.keys(row).map(key => (
                    <>
                    <p>{key}</p>
                    <p>{row[key]}</p>
                    </>
                ))
            })} */}
        </div>
    );
}

export default MainBar; 