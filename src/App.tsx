import { useCallback, useState } from 'react';
import './App.css';
import Fade from './component/fade';
import Image from './component/image';
import MenuList from './component/menu-list';

const App = () => {
  const [action, setAction] = useState<string | undefined>(undefined);
  const handleGetAction = useCallback(
    (actionName: string | undefined) => {
      setAction(actionName);
    },
    [],
  );
  return (
    <div className="flex flex-row w-100  gap-20">
      <div className="flex w-1/3 text-start flex-col">
        <Fade delayCounter={1500}>
          <Image url="../src/assets/me.png" />
          <MenuList
            onSelectAction={handleGetAction}
            action={action}
          />
        </Fade>
      </div>
      <div className="flex flex-col w-2/3 pr-10">
        <div className="flex flex-col w-70">
          <Fade delayCounter={1000}>
            <div className="text-start text-5xl gap-10">
              <span>KASEAMPONG</span>
              <span className="ml-14">THONGPASART</span>
            </div>

            <h1 className="text-end pr-7"> Developer </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default App;
