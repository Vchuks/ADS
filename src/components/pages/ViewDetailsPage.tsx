import Header from "../admin/Header";
import ViewDetails from "../admin/report/ViewDetails";
import {  useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";
import { MyContext } from "../context/MyContext";

const ViewDetailsPage = () => {
  const {id, setDeviceReport} = useContext(MapContext)
  const {baseUrl} = useContext(MyContext)
  // const [item, setItem] = useState('')
  

  
  
  
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");
    // const t =`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3p1Yml0ZWNocy5jb20vYWRzX2FwaXMvYXBpL2xvZ2luIiwiaWF0IjoxNzA5OTk2Njg4LCJleHAiOjE3MTAyMTI2ODgsIm5iZiI6MTcwOTk5NjY4OCwianRpIjoiUXJiZDI5YUNRaXkzYU5vdSIsInN1YiI6IjEiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5IiwibmFtZSI6IkFEUyBBZG1pbiIsInJvbGUiOiJhZG1pbiIsImlkIjoxfQ.1wpOeM1rxjCgDJ46zWHVIEBz2CVebh7Y0b_n4umUFnw`
    // tokHead.append("Authorization", `Bearer ${t}`);
    const tokHead = new Headers();
    
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    
    const eachDetail = () => {
      fetch(
        `${baseUrl}/ads_apis/api/get_device_details?device_id=${id}`,
        {
          method: "GET",
          headers: tokHead,
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setDeviceReport(result)
        });
    };
    eachDetail()
  }
  , [id,setDeviceReport,baseUrl]);

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
