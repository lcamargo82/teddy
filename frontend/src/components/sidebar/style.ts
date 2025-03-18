import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")}; /* Animação de deslizamento da esquerda */
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    transition: left 0.3s ease-in-out; /* Animação suave */
    z-index: 20;

    .rounded-close-sidebar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        background-color: "#131313";
        right: -25px;
        top: 125px;
        .black-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #131313;
            box-shadow: 0px 0x 2px 5px rgba(0, 0, 0, 0.2);
        }
        .black-circle:hover {
                background-color: rgb(19, 19, 19, 0.95);
                box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
        }
        div {
            width: 20px;
            background-color: #fff;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .ul-container {
        display: flex;
        padding: 3rem 0 0 0;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background-color: #fff;
    }

    .image-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        background-color: rgb(64, 64, 64);
    }

    .ul-nav {
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 16px;
        font-weight: 500;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

export const SideBarLi = styled.li`
    text-decoration: none;
    display: flex;
    gap: 8px;
    align-items: center;

    .active {
        color: var(--primary-color); /* Cor laranja quando ativo */
        font-weight: bold; /* Adiciona negrito para destacar o item */
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;