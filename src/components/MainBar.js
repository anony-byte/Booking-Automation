import { useEffect, useState } from "react";
const MainBar = (props) => {
    // let data = props.data;
    // let isDataArray = props.isDataArray; 
    const [data, setData] = useState([]);
    const [isDataArray, setIsDataArray] = useState(false);

    useEffect(() => {
        setData(props.data);
        setIsDataArray(props.isDataArray);
    }, [props.data, props.isDataArray]);
    // console.log("Props data : ", props.data);
    // console.log(props.data);
    return (
        <div className="main-area">
            {isDataArray && data ? (
                data.map(person => {
                    return (
                        Object.entries(person).map(entry => {
                            return (
                                <p>{entry[0]} : {entry[1]}</p>
                            );
                        })
                    );
                })
            ) : (
                <div className="one-person-container" key={data}>
                    <p>{data}</p>
                </div>
            )}
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