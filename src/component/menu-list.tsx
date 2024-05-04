import { IMenu, Menu } from '../interface/action-menu';
import ActionButton from './action-button';
interface props {
  action?: string;
  onSelectAction?: (actionName: string | undefined) => void;
}

const MenuList = ({ onSelectAction, action }: props) => {
  const ListMenu: IMenu[] = [
    { name: Menu.ABOUT, display: 'About' },
    { name: Menu.EDUCATION, display: 'Education' },
    { name: Menu.WORK_EXPERIENCE, display: 'Work Experience' },
    { name: Menu.CONTACT, display: 'Contact' },
  ];

  return (
    <>
      <span className="flex flex-col text-xl mt-10 ">Menu</span>
      <div className="flex flex-col gap-1 mt-2 absolute ">
        {ListMenu.map((item) => (
          <ActionButton
            name={item.name}
            display={item.display}
            onSelectAction={onSelectAction}
            action={action}
          />
        ))}
      </div>
    </>
  );
};

export default MenuList;
