import data from '../../assets/mock.data/experience.json';
interface IExperienceDetail {
  techs: string[];
  jobDetails: string[];
}
interface IExperience extends IExperienceDetail {
  companyName: string;
  date: string;
}
const ExperienceDetail = ({
  companyName,
  techs,
  date,
  jobDetails,
}: IExperience) => {
  return (
    <div className="flex-col group text-start text-content gap-4 mt-5 outline-none border-transparent rounded-lg hover:bg-primary-300 sm:p-2 md:p-2">
      <div className="flex items-center sm:justify-between lg:justify-start">
        <span className="font-digitalFont">{date}</span>
        <span className="text-lg ml-5">{companyName}</span>
      </div>
      <div className="flex flex-wrap py-3 text-sm">
        <div className="sm:hidden md:hidden lg:flex">
          {techs?.map((item: string) => TechCard(item))}
        </div>
      </div>
      <div className="text-xs text-gray-400  group-hover:text-white">
        {jobDetails?.map((jobDetail: string) => (
          <p>{jobDetail}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2.5 py-3 lg:hidden">
        {techs?.map((item: string) => TechCard(item))}
      </div>
    </div>
  );
};

const TechCard = (tech: string) => {
  return (
    <div className="bg-green-500 rounded-full px-2  ml-2">
      <p> {tech}</p>
    </div>
  );
};

const ExperienceContent = () => {
  return (
    <div>
      {data?.jobs.map((job: IExperience) => (
        <ExperienceDetail
          companyName={job?.companyName}
          date={job?.date}
          techs={job?.techs}
          jobDetails={job?.jobDetails}
        />
      ))}
    </div>
  );
};

export default ExperienceContent;
