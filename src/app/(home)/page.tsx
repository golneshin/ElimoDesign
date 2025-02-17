import coursesInformation from "@/courses-information";
import { ArrowDownToDot } from "lucide-react";
import Course from "@/components/course";
import { videoIds } from "@/video-ids";
import { alegreya } from "@/fonts";

const page = () => {
  const sampleVideos = videoIds.sort(() => Math.random() - 0.5).slice(0, 3);

  const sampleCourses = coursesInformation
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div>
      {/* hero section */}
      <header className={`relative w-full py-24 ${alegreya.className}`}>
        <div className="container mx-auto px-6 flex flex-col items-end">
          <div className="max-w-lg text-right">
            <h1 className="text-3xl md:text-5xl font-bold max-md:text-gray-300 text-gray-600">
              "It’s not the best content that wins. It’s the best-promoted
              content that wins."
            </h1>
            <p className="mt-4 text-lg md:text-xl font-semibold max-sm:text-gray-400 text-gray-700">
              — Andy Crestodina
            </p>
          </div>
          <button className="mt-6 px-6 py-3 text-gray-400 text-lg font-semibold rounded-xl border border-gray-400 hover:bg-gray-600 hover:text-white transition">
            Let’s Promote Your Content
          </button>
        </div>
      </header>
      {/* sample projects */}
      <section className=" flex flex-col gap-4 my-10 py-12 items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-400">
            Some of My Projects
          </h2>
          <ArrowDownToDot className="text-gray-400" size={40} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleVideos.map((id, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>
      {/* sample courses */}
      <section className=" flex flex-col gap-4 my-10 py-12 items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-400">
            Some of My Courses
          </h2>
          <ArrowDownToDot className="text-gray-400" size={40} />
        </div>
        <div className="flex flex-wrap justify-center">
          {sampleCourses.map((course, idx) => (
            <div key={idx} className=" p-4">
              <Course course={course} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
