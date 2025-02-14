import Course from "@/components/course";
import coursesInformation from "@/courses-information";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center my-14">
      {coursesInformation.map((course, idx) => (
        <div key={idx} className=" p-4">
          <Course course={course} />
        </div>
      ))}
    </div>
  );
};

export default page;
