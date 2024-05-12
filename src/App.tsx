import { useCallback, useState } from 'react';
import './App.css';
import Fade from './component/fade';
import Image from './component/image';
import MenuList from './component/menu-list';
import ContentManager from './component/content-manager';

const App = () => {
  const [action, setAction] = useState<string | undefined>(undefined);
  const handleGetAction = useCallback(
    (actionName: string | undefined) => {
      setAction(actionName);
    },
    [],
  );
  return (
    <div className="flex flex-row w-100">
      <div className="flex w-1/3 text-start flex-col static">
        <Fade delayCounter={1500}>
          <Image url="../src/assets/me.png" />
          <MenuList
            onSelectAction={handleGetAction}
            action={action}
          />
        </Fade>
      </div>
      <div className="flex flex-col w-2/3">
        <div className="flex flex-col w-70">
          <Fade delayCounter={1000}>
            <div className="text-end text-5xl">
              <span>KASEAMPONG</span>
              <span className="ml-14">THONGPASART</span>
            </div>
            <div className="text-end text-5xl mt-5">
              FULL - STACK DEVELOPER
            </div>
          </Fade>
          <ContentManager></ContentManager>
        </div>
      </div>
    </div>
  );
};
export default App;
