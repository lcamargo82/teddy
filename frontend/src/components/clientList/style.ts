import styled from "styled-components";

export const ClientListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    min-width: 250px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    align-items: center;
    flex-wrap: wrap;
  }

  .pagination button {
    color: var(--pretty-black);
    padding: 5px 15px;
    cursor: pointer;
    font-size: 14px;
    min-width: 35px;
    text-align: center;
  }

  .pagination button:disabled {
    color: var(--gray-color);
    cursor: not-allowed;
  }

  .pagination .active-page {
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
  }

  .button-create {
    width: 100%;
    color: var(--primary-color);
    background-color: transparent;
    border: 2px solid var(--primary-color);
  }

  .button-create:hover {
    background-color: var(--primary-color);
    color: white;
  }
  .header-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    li {
      flex: 1 1 30%;
    }

    .pagination button {
      padding: 5px 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    li {
      flex: 1 1 45%;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .header-list {
      display: flex;
      justify-content: center; 
      flex-direction: column;
    }

    .pagination button {
      padding: 5px 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    li {
      flex: 1 1 100%;
    }

    .pagination button {
      padding: 5px 8px;
      font-size: 10px;
      min-width: 30px;
    }
  }
`;