import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: var(--cyan-900);
  height: 600px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    text-align: center;

    position: absolute;
    bottom: 4rem;

    p {
      line-height: 2rem;
      letter-spacing: -1px;
    }
  }
`
