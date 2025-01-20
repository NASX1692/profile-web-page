import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
const Resume = () => {
  const URL = `${window.location.href}resume.pdf`;
  return (
    <a
      className="flex group mt-10 items-center"
      href={URL}
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-lg tracking-tight mr-2 group-hover:text-content ">
        View Reasume
      </div>
      <div className="group-hover:text-content">
        <FaArrowUpRightFromSquare size={'13px'} />
      </div>
    </a>
  );
};

export default Resume;
