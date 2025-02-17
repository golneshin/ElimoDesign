import { MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface courseProps {
  name: string;
  description: string;
  imgUrl: string;
}

const Course = ({ course }: { course: courseProps }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image
          className="rounded-t-lg"
          src={course.imgUrl}
          alt={course.name}
          width={1200}
          height={800}
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {course.name}
          </h5>
        </Link>
        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <div className="flex justify-between">
          <Link
            href={`/courses/${course.name}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Add to Card &nbsp;&nbsp; <ShoppingCart />
          </Link>

          <Link
            href={`/courses/${course.name}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more &nbsp;&nbsp; <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
