import ContentManager from '../component/content-manager';
import Header from '../component/header';

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 ">
      <div className="flex text-start text-3xl py-16 ">
        <Header />
      </div>
      <div className="flex gap-10 lg:py-16 ">
        <ContentManager />
      </div>
    </div>
  );
};
export default HomePage;
