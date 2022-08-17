import styled from "styled-components"

export const Article = styled.article`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.highlightColor};
    margin: 3rem 0 1rem 0;
    width: 100%;
  }
  
  h4, h5{
    margin: 3rem 0 0 0;
    width: 100%;
  }

  p {
    margin-bottom: 1rem;
    vertical-align: middle;
    text-align: left;
    display: flex;
  }

  ul{
    list-style-type: none;
    text-decoration: none;
    line-height: 2rem;
    padding: 0;
  }
`;