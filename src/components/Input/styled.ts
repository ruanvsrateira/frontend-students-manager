import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .input {
        width: 60%;
        height: 50px;
        border: none;
        border-radius: 4px;
        padding-left: 10px;
        border: 2px solid #fff;
        border: 1px solid rgb(124 124 124);
        outline: none
    };

    .input:hover {
        border: 1px solid rgb(0 232 143);
        transition: 200ms;
    };

    .input:focus {
        border: none;
        border: 1px solid rgb(0 232 143);
        transition: 0s;
    };

    input.error {
        border: 1px solid rgb(229 62 62);
    };
`;

export const ContentError = styled.div`
    width: 61%;
    height: 15px;

    h3 {
        color: rgb(229 62 62);
        margin-right:47%;
        font-family: "Poppins";
        font-size: 17px;
    }
`;