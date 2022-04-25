import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

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
    }

    .input:focus {
        border: none;
        border: 1px solid rgb(0 232 143);
        transition: 0s;
    }
`;