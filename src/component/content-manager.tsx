import AboutContent from './content/about-content';
import EducationContent from './content/education-content';
import ExperienceContent from './content/experience-content';
import Fade from './fade';

const ContentManager = () => {
  return (
    <div className="gap-x-10 w-full px-5 py-4 ">
      <Fade delayCounter={1000}>
        <div id={`about-section`} className="h-36 sm:h-60 ">
          <AboutContent />
        </div>
        <div id={`experience-section`}>
          <ExperienceContent />
        </div>

        <div id={`education-section`} className="h-60">
          <EducationContent />
        </div>
      </Fade>
      <div className="h-60" />
    </div>
  );
};

export default ContentManager;
