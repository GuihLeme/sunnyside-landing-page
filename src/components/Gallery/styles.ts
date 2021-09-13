import styled from "styled-components";
import { Desktop } from "../../styles/_breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;


  img {
    width: 50%;
  }

  @media ${Desktop()} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    max-width: 1440px;
    margin: 0 auto;


    img {
      width: 25%
    }
  }
`
