import styled from "styled-components";

const Form = styled.form`
  // display: ${props => props.inputDisplay || "grid"};
  // display: ${props => props.inputDisplay || "flex"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: var(--space-s);
  padding: var(--space-s);
  /* align-items: center; */
`;

// props feed into Search.js - allows us to override CSSComponents on special occasions
const Button = styled.button`
  padding: ${props => props.inputPadding || "var(--space-m)"};
  background-color: ${props => props.inputColor || "var(--primary-app-colour)"};
  font-family: Source Sans Pro;
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: auto;
  max-width: 100px;
  justify-self: center;
  cursor: pointer;
  border-radius: 0.6rem;
  border: 0px;
  margin-bottom: 5em;
  transition: 0.4 all ease-in-out;
  &:hover {
    background-color: brown;
  }
`;

const Input = styled.input`
  border-color: var(--secondary-app-colour);
  border-width: thin;
  border-radius: 5px;
  border: none;
  margin-top: var(--space-xs) var(--space-xs) var(--space-xs) 0;
  border: 1px solid lightgray;
  padding: var(--space-xs);
  width: 80vw;
  max-width: 400px;
  font-family: Source Sans Pro;
  font-size: 16px;
  /* padding: var(--space-xs); */
  height: ${props => props.height || "var(--space-l)"};
  /* margin: var(--space-s); */
  background-color: var(--white);
  text-align: left;
  justify-self: left;
`;

const Label = styled.label`
  margin: var(--space-xs);
  margin-top: 0.2em;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export { Form, Input, Button, Label };
