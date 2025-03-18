import styled from "styled-components";

export const ClientCardContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 100%;
    max-width: 300px;
    height: 138px;
    flex: 1 1 23.8%;
    border: 2px solid rgb(13, 13, 13, 0.3);
    background-color: white;
    box-sizing: border-box;
    overflow: hidden;

    .infos {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }

    .name {
        font-weight: bold;
        font-size: 16px;
        word-wrap: break-word;
    }

    .actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    button {
        background-color: transparent;
        border: none;
    }

    .selected-client-remove {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .selected-client-remove >:hover {
        color: red;
    }

    .icon-action {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 10px 15px;
        max-width: 100%;

        .infos {
            gap: 8px;
        }

        .name {
            font-size: 14px;
        }

        .actions {
            flex-direction: row;
            gap: 10px;
        }

        .icon-action {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        padding: 10px 10px;

        .infos {
            gap: 6px;
        }

        .name {
            font-size: 12px;
        }

        .actions {
            flex-direction: row;
            gap: 8px;
        }

        .icon-action {
            width: 16px;
            height: 16px;
        }
    }
`;