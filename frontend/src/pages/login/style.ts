import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .login-form-container {
        display: flex;
        padding: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 521px;
    }

    .text-field-login {
        width: 100%;
        border-radius: 4px;
        height: 60px;
    }

    .button-form-login {
        width: 100%;
        background-color: var(--primary-color);
        border-radius: 4px;
        height: 60px;
    }

    .login-welcome {
        font-size: 2.25rem;
    }
`