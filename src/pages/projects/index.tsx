import Header from '../../../components/Header';
import ProjectPages from '../../../components/ProjectPages';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
    return (
        <ProjectsContainer>
            <Header />
            <main className="container">
                <ProjectPages 
                  title="Project 01"
                  type="Website"
                  imgUrl="https://compass-ssl.xbox.com/assets/17/74/17744025-4e9e-4ef1-a62d-e656fce375e3.jpg?n=Elden-Ring_Feature-Image-Priority_1_1248x702.jpg"
                  slug="project1"/>
                <ProjectPages 
                  title="Project 02"
                  type="Website"
                  imgUrl="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/elden-ring-review.jpg"
                  slug="project2"/>
                <ProjectPages 
                  title="Project 03"
                  type="Website"
                  imgUrl="https://files.tecnoblog.net/wp-content/uploads/2021/11/elden-ring-00.jpeg"
                  slug="project3"/>
                <ProjectPages 
                  title="Project 04"
                  type="Website"
                  imgUrl="https://i.pinimg.com/originals/1d/f8/2d/1df82da15d8a835b16175c571b15061f.jpg"
                  slug="project4"/>
            </main>
        </ProjectsContainer>
    )
}