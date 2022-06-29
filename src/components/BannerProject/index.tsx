import React from 'react';
import { Container } from './styles';

interface BannerProjectProps {
  title: string
  type: string
  imgUrl: string
}

const BannerProject: React.FC<BannerProjectProps> = ({ title, type, imgUrl }) => {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay">
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </div>
    </Container>
  );
};

export default BannerProject;
