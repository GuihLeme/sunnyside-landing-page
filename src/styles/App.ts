import styled from "styled-components";
import { Desktop } from "./_breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${Desktop()} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }
`
