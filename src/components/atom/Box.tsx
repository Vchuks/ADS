import { useContext } from "react";
import Text from "./Text";
import { MapContext } from "../context/MapContext";

type BoxProp = {
  firstText: string | number;
  firstClass: string;
  secondText: string | number;
  secondClass: string;
  mainClass: string;
};

const Box = ({
  firstText,
  mainClass,
  secondText,
  firstClass,
  secondClass,
}: BoxProp) => {
  const { setFilter } = useContext(MapContext);
  return (
    <div
      className={mainClass}
      onClick={() => {
        
        // SOS, ACCIDENT DETECTED, Manual Scan, pending_case, attended_case, online, offline
        firstText === "Accident Detected" && setFilter("ACCIDENT DETECTED") ;
        firstText === "Manual Report" && setFilter("Manual Scan");
        firstText === "Pending Cases" && setFilter("pending_case");
        firstText === "Attended Cases" && setFilter("attended_case");
        firstText === "Offline" && setFilter("offline");
        firstText === "Online" && setFilter("online");
        firstText === "SOS" && setFilter("SOS");
        firstText === "Away" && setFilter("away");
        if(firstText === 'Responders'){
          window.location.href = '/responder'
        }
      }}
    >
      <Text
        className={firstClass || "text-[#4D5657] leading-none font-semibold"}
        body={firstText}
      />
      <Text
        className={secondClass || "text-[#4D5657] leading-snug pt-1"}
        body={secondText}
      />
    </div>
  );
};

export default Box;
