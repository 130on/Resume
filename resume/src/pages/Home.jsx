import Intro from './sections/Intro';
import MiniResume from './sections/MiniResume';
import ProjectsPreview from './sections/ProjectsPreview';
import ContactPreview from './sections/ContactPreview';
import BackToTop from '../components/BackToTop';


function Home() {
  return (
    <div>
      <Intro />
      <MiniResume />
      <ProjectsPreview />
      <ContactPreview />
      <BackToTop />
    </div>
  );
}

export default Home;