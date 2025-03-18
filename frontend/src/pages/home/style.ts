import { styled } from "styled-components";

export const HomeContainer = styled.div`
    background-color: var(--background-gray-home-color);
    padding: 30px 120px;

    @media (max-width: 1024px) {
        padding: 30px 80px;
    }

    @media (max-width: 768px) {
        padding: 30px 50px;
    }

    @media (max-width: 480px) {
        padding: 30px 20px;
    }
`;
