const Page = () => {
  const videoIds = [
    "dQw4w9WgXcQ", // Video 1
    "3JZ_D3ELwOQ", // Video 2
    "L_jWHffIx5E", // Video 3
    "tgbNymZ7vqY", // Video 4
    "V-_O7nl0Ii0", // Video 5
    "kJQP7kiw5Fk", // Video 6
    "hY7m5jjJ9mM", // Video 7
    "fLexgOxsZu0", // Video 8
    "09R8_2nJtjg", // Video 9
  ];

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
