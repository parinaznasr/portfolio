import React, {useState} from 'react';
import styled from 'styled-components';
import BlurOnIcon from "@mui/icons-material/BlurOn";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";

const StyledFooter = styled.div`
  width: 100%;
  bottom: 0px;
  right: 0px;
  padding: 10px 0;
  white-space: nowrap;
  background-color: rgba(72, 71, 70, 0.87);
  font-size: calc(0.8em + 0.2vw);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    float: left;

    & img {
      width: 90px;
      margin-right: 10px;
    }
  }


  .links {
    margin-left: 10vw;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & * {
      flex-basis: 33%;
      color: white;
      text-decoration: none;
      font-size: calc(0.2vw + 0.8em);
      margin: 5px 0px;
      letter-spacing: 0px;
      font-family: 'Lato', sans-serif;
    }
  }

  .links a:hover {
    color: #fab058;
  }

  .link-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .contact {
    & h2 {
      margin: 0px 0px 5px 0px;
      font-size: calc(0.2vw + 1em);
      font-family: 'Rubik', sans-serif;
      font-weight: none;
      border-bottom: 1px solid white;
      padding-bottom: 3px;
      color: white;
    }

    text-align: center;
    color: white;
    font-size: calc(0.2vw + 0.6em);
    margin-left: 5vw;
    line-height: calc(0.2vw + 1.2em);
  }

`;

const Footer = () => {
    const [iconSize, setIconSize] = useState(90);
    const navigate = useNavigate();

    return(
        <StyledFooter>
            <div className="links">
                <div className="icon fade-in" onClick={() => { }}>
                    <BlurOnIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                    <div>Projects</div>
                </div>

                <div className="icon fade-in" onClick={() => navigate('../')}>
                    <HomeIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                    <div>Home</div>
                </div>

                {/*<div className="link-container">*/}
                {/*    <a href="/Gallery">Gallery</a>*/}
                {/*</div>*/}

            </div>
            <div className="contact">
                <h2>Contact</h2>
                phone number
            </div>
        </StyledFooter>
    )
};


export default Footer;
