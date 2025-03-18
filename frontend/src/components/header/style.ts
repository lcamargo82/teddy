import styled from "styled-components";

// Container principal do cabeçalho
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 100px;
    box-shadow: 0px 2px 34px 0px rgba(153,153,153,1);
    .menu-iconz {
        width: 24px;
        height: auto;
        color: gray;
        cursor: pointer;
    }

    .span-welcome {
        color: var(--primary-color);
        font-weight: bold;
    }

    .logo-image {
        @media (max-width: 720px) {
            display: none;
        }
    }

    .menu-logo {
        display: flex;
        gap: 46px;
        justify-content: center;
        align-items: center;
    }
`;

// Estilos do NavBar (barra de navegação)
export const NavBar = styled.nav`
    @media (max-width: 720px) {
        display: none; /* Oculta o menu normal em telas pequenas */
    }

    .ul-nav {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }
`;

// Estilos do item da navegação
export const NavBarLi = styled.li`
    :hover {
        transition: all 0.3s ease-in-out;
        color: var(--primary-color);
        cursor: pointer;
    }

    .active {
        color: var(--primary-color); /* Cor laranja quando ativo */
        font-weight: bold; /* Adiciona negrito para destacar o item */
    }

    .disable {
        text-decoration: none;
    }

    a {
        color: inherit;
    }
`;

// Overlay que aparece quando o menu lateral está aberto
export const SidebarOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;
