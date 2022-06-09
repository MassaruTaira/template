import { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from './styles';

interface ProjectPagesProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjectPages({ title, type, imgUrl, slug }: ProjectPagesProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
};

export default ProjectPages;
