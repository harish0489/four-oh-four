import React, { useState, useEffect } from "react";
import {
  FourZeroFourContainer,
  FourZeroFourImg,
  FourZeroFourOops,
} from "../styles/Styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);
  const [state, setState] = useState(1);
  
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
    if(time === 0){
      navigate('/')
    }
  }, []);

  useEffect(() => {
    let index = Math.floor(Math.random() * 20 + 1);
    setState(index);
  }, []);

  return (
    <FourZeroFourContainer>
      <FourZeroFourOops>
        Ooops, We are sorry <br/> 
        The page is either broken or no longer availabe. You should be redirected to Home Page in {time} seconds. <br/> 
        If not, please click here to go back to <Link to="/">Home</Link>
      </FourZeroFourOops>
      <FourZeroFourImg src={`/assets/${state}.svg`} />
    </FourZeroFourContainer>
  );
}

export default NotFound;