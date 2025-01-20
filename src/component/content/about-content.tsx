import { ReactTyped } from 'react-typed';
import data from '../../assets/mock.data/about.json';

const AboutContent = () => {
  return (
    <div className="text-left text-lg text-content scroll-mt-[1200px]	">
      <ReactTyped
        strings={[data.about]}
        showCursor={false}
        typeSpeed={30}
      />
    </div>
  );
};

export default AboutContent;
