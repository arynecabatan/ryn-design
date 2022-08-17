import React, {useState} from 'react';
import styled from "styled-components";

const ButtonCategory = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  padding: 0 0 1rem 0;

  .button-a{
    border: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    background: transparent;
    margin: 0 0 0 0.25rem;
    cursor: pointer;
    opacity: 0.3;
    padding: 0.5rem 1.25rem 0.5rem 1.25rem;
    border-radius: 3rem;
    
    box-shadow: none;
  }
`;

const Categories = ({ categories, filterItems }) => {

  const [value, setValue] = useState(0)
  return (
    <ButtonCategory>
      {categories.map((category, index) => {
        return (
          <button type="button"
            key={index}
            className={`button-a ${index === value && 'active-btn'}`}
            onClick={() => {
            setValue(index)
            filterItems(category)}
          }>
            {category}
          </button>
        );
      })}
    </ButtonCategory>
  );
};

export default Categories;
