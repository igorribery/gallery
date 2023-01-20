import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    button {
        background-color: #F31B1B;
        border: 0;
        display: block;
        margin: 10px 0;
        border-radius: 10px;
        padding: 5px;
        font-size: 12px;
        color: #FFF;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
    
`;