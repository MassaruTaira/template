import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <SectionTitle title="Latest projects" />

      <section>
        <ProjectItem
          img="https://compass-ssl.xbox.com/assets/17/74/17744025-4e9e-4ef1-a62d-e656fce375e3.jpg?n=Elden-Ring_Feature-Image-Priority_1_1248x702.jpg"
          title="Project 1"
          type="Website"
          slug="project1"
        />
        <ProjectItem
          img="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/elden-ring-review.jpg"
          title="Project 2"
          type="Website"
          slug="project2"
        />
        <ProjectItem
          img="https://files.tecnoblog.net/wp-content/uploads/2021/11/elden-ring-00.jpeg"
          title="Project 3"
          type="Website"
          slug="project3"
        />
        <ProjectItem
          img="https://i.pinimg.com/originals/1d/f8/2d/1df82da15d8a835b16175c571b15061f.jpg"
          title="Project 4"
          type="Website"
          slug="project4"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
