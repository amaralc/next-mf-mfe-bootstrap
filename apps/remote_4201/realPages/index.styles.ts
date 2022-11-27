import styled from '@emotion/styled';

export const StyledHero = styled.div`
  align-items: center;
  background-color: #f33;
  border: none;
  box-sizing: border-box;
  color: rgba(55, 65, 81, 1);
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
  border-radius: 1.5rem;

  .text-container {
    color: rgba(255, 255, 255, 1);
    padding: 3rem 2rem;
  }

  .text-container h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    position: relative;
  }

  .text-container h2 svg {
    color: hsla(162, 47%, 50%, 1);
    height: 2rem;
    left: -0.25rem;
    position: absolute;
    top: 0;
    width: 2rem;
  }

  .text-container h2 span {
    margin-left: 2.5rem;
  }

  .text-container a {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.75rem;
    color: rgba(55, 65, 81, 1);
    display: inline-block;
    margin-top: 1.5rem;
    padding: 1rem 2rem;
    text-decoration: inherit;
  }

  .logo-container {
    display: none;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .logo-container svg {
    color: rgba(255, 255, 255, 1);
    width: 66.666667%;
  }
`;
