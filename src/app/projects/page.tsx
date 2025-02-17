import { videoIds } from "@/video-ids";

const Page = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Some of My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoIds.map((id, index) => (
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
      </div>
    </section>
  );
};

export default Page;
