import styled from "styled-components";

export const StyledSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-size:calc(1.8vw + 0.7em);
        font-family: 'Rubik', sans-serif; 
    }

    .container {
        width: 100%;
        font-size: calc(0.3vw + 0.8em);
        line-height: calc(0.8vw + 1.3em);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 0px 60px 0px;
    }
`;
