import data from '../assets/mock.data/contact.json';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa6';

const Contact = () => {
  const { github, email, linkIn, instagram } = data.contact;
  return (
    <div className="flex gap-5 mt-10 text-xl lg:mt-40">
      <a
        className="text-gray-300 hover:text-white "
        href={github}
        target="_blank"
      >
        <FaGithub size={'28px'} />
      </a>
      <a
        className="text-gray-300 hover:text-white"
        href={linkIn}
        target="_blank"
      >
        <FaLinkedin size={'28px'} />
      </a>
      <a
        className="text-gray-300 hover:text-white"
        href={`mailto:${email}`}
        target="_blank"
      >
        <FaEnvelope size={'28px'} />
      </a>
      <a
        className="text-gray-300 hover:text-white"
        href={instagram}
        target="_blank"
      >
        <FaInstagram size={'28px'} />
      </a>
    </div>
  );
};

export default Contact;
