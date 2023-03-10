import styled from "styled-components"; 

export const Container = styled.div`
    
    background-color: #27282;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 55px;
        margin-bottom: 20px;
    }
    .loading {
        font-size: 23px;
        font-weight: bold;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        border-radius: 10px;
        padding: 8px 16px;
        font-size: 15px;
        cursor: pointer;
        margin: 0px 20px;

        &:hover {
            opacity: 0.8;
        }
    }
`;

