import data from '../../assets/mock.data/education.json';

const EducationContent = () => {
  const unversity = data?.education;
  return (
    <div className="text-left antialiased py-24">
      <div className="flex justify-between">
        <div className="text-xl text-content">Education</div>
        <div className="text-xl font-digitalFont text-content">
          {unversity.time}
        </div>
      </div>

      <div className="flex flex-col text-sm">
        <p>{unversity.university}</p>
        <p>{unversity.major}</p>
      </div>
    </div>
  );
};

export default EducationContent;
