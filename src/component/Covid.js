import React, { useEffect } from 'react'
import { useState } from 'react';

function Covid() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCovidData();
    }, []);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="container-fluid  main">
                <div className="row ">
                    <h1 className='text-center' style={{color:"red"}}> <marquee behavior="" direction="">LIVE</marquee> </h1>
                    <h2 className='text-center' style={{color:"black"}}> COVID-19 TRACKER APP</h2>

                    <div className="col-md-4 mt-5">
                        <div className="card mycard" style={{
                            backgroundColor: "#FB607F",
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <p className='text-center tit1'> <span className='sp1'> OUR </span> COUNTRY </p>
                            <p className='text-center tit1'>India</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="card mycard" style={{
                            backgroundColor:"#2E8B57",
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <p className='text-center tit1'> <span className='sp1'> Total </span> Recovered </p>
                            <p className='text-center tit1'>{data.recovered}</p>
                        </div>
                    </div>
                    <div className="col-md-4  mt-5">
                        <div className="card mycard" style={{
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:"#FADA5E"
                        }}>
                            <p className='text-center tit1 '> <span className='sp1'> Total </span> confirmed </p>
                            <p className='text-center tit1'>{data.confirmed}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4  mt-5">
                        <div className="card mycard" style={{
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:"yellowgreen"
                        }}>
                            <p className='text-center tit1'> <span className='sp1'> Total </span> Active </p>
                            <p className='text-center tit1'>{data.active}</p>
                        </div>
                    </div>
                    <div className="col-md-4  mt-5">
                        <div className="card mycard" style={{
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:"#FFA500"
                        }}>
                            <p className='text-center tit1'> <span className='sp1'> Total </span> death </p>
                            <p className='text-center tit1'>{data.deaths}</p>
                        </div>
                    </div>
                    <div className="col-md-4  mt-5">
                        <div className="card mycard" style={{
                            height: 25 + "vh",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:"slategrey",
                            
                        }}>
                            <p className='text-center tit1'> <span className='sp1'> Last </span> Updated </p>
                            <p className='text-center tit1'>{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Covid