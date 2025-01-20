import { ListMenu } from '../constant';
import ActionButton from './action-button';
import useScrollSpy from './useScroll';

const MenuList = () => {
  const sections = [
    'about-section',
    'experience-section',
    'education-section',
  ];
  const onSelectSection = (sectionId: string) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeId = useScrollSpy(sections, 240);
  return (
    <div className="text-lg gap-3 mt-5 sm:hidden md:hidden lg:flex flex-col">
      {ListMenu.map((item) => (
        <ActionButton
          name={item.sectionId}
          display={item.tital}
          onSelectAction={onSelectSection}
          activeId={activeId}
        />
      ))}
    </div>
  );
};

export default MenuList;
