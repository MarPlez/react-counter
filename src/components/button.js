import styled from "styled-components";

const Button = styled.button`
      width: 50px;
      padding: 10px;
      margin: 5px;
      font-size: 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
