import Header from "../admin/Header";
import ViewDetails from "../admin/report/ViewDetails";
import {  useContext, useEffect, useState } from "react";
import { MapContext } from "../context/MapContext";

const ViewDetailsPage = () => {
  const {id, setReport} = useContext(MapContext)
  const [item, setItem] = useState('')
  

  
  
  
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");
      
    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    const eachDetail = () => {
      fetch(
        `https://zubitechs.com/ads_apis/api/get_device_details?device_id=${id}`,
        {
          method: "GET",
          headers: tokHead,
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setReport(result)
        });
    };
    eachDetail()
  }
  , [id,setReport]);

  return (
    <div>
      <Header
        subhead="Description Of the  particular devices you selected "
        headText="View Details Page"
      />
      <ViewDetails />
    </div>
  );
};

export default ViewDetailsPage;
