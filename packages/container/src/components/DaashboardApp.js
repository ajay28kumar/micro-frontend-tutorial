import { mount as dashboardMount } from "dashboard/DashBoardApp";
import React, {useRef, useEffect} from "react";


export default () => {
  const ref = useRef(null);
  
  useEffect(() => {
    dashboardMount(ref.current)
    }, []);

  return (
    <div ref={ref}/>
  )
};


