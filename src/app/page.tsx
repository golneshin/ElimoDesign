import { alegreya } from "./layout";

const page = () => {
  return (
    <div>
      <header className={`relative w-full py-20 ${alegreya.className}`}>
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
    </div>
  );
};

export default page;
