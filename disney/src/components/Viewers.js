import styled from 'styled-components';

function Viewers(props) {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
        <video autoPlay loop playsInline>
          <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='' />
        <video autoPlay loop playsInline>
          <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='' />
        <video autoPlay loop playsInline>
          <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='' />
        <video autoPlay loop playsInline>
          <source
            src='/videos/1608229455-star-wars.mp4'
            type='video/mp4'
          />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='' />
        <video autoPlay loop playsInline>
          <source
            src='/videos/1564676296-national-geographic.mp4'
            type='video/mp4'
          />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 25px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 18px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
  &:hover {
    video {
      opacity: 1;
    }
    transform: scale(1.05);
  }
`

export default Viewers;