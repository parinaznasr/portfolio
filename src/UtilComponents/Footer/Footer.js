import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import BlurOnIcon from "@mui/icons-material/BlurOn";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useNavigate} from "react-router-dom";

const StyledFooter = styled.div`
  width: 100%;
  bottom: 0px;
  right: 0px;
  white-space: nowrap;
  background-color: #45484A;
  font-size: calc(0.8em + 0.2vw);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .links {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & * {
      flex-basis: 33%;
      color: white;
      text-decoration: none;
      //font-size: calc(0.2vw + 0.8em);
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
    const [iconSize, setIconSize] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIconSize(40);
            } else {
                setIconSize(60);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <StyledFooter>
            <div className="links">
                <div className="icon fade-in" onClick={() => navigate('../projects')}>
                    <BlurOnIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                    {/*<div>Projects</div>*/}
                </div>

                <div className="icon fade-in" onClick={() => navigate('../')}>
                    <HomeIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                    {/*<div>Home</div>*/}
                </div>

                <div className="icon fade-in" onClick={() => document.getElementById('bodycomponent').scrollIntoView({ behavior: 'smooth' })}>
                    <KeyboardArrowUpIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                    {/*<div>Top</div>*/}
                </div>

            </div>
        </StyledFooter>
    )
};


export default Footer;
