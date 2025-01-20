import { ReactTyped } from 'react-typed';
import Fade from './fade';
import MenuList from './menu-list';
import Contact from './contact';
import Resume from './resume';

const Header = () => {
  return (
    <div>
      <div className="lg:fixed">
        <Fade delayCounter={1000}>
          <div className="tracking-tight text-3xl text-content ">
            <span>KASEAMPONG THONGPASART</span>
          </div>
          <div className="mt-3 text-3xl font-digitalFont tracking-tight text-green-500 ">
            <ReactTyped
              strings={['Full Stack Developer']}
              typeSpeed={100}
              startDelay={1000}
            />
          </div>
          <MenuList />
          <Resume />
          <Contact />
        </Fade>
      </div>
    </div>
  );
};

export default Header;
