"use client";

import { MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/useCart";

interface courseProps {
  name: string;
  description: string;
  imgUrl: string;
}

const Course = ({ course }: { course: courseProps }) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(course.name);
  };

  return (
    <div className="max-w-sm bg-white/90 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800/90 dark:border-gray-700">
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
        <div className="flex justify-between gap-4">
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-100 dark:focus:ring-gray-800 border border-gray-200"
          >
            Add to Cart &nbsp;&nbsp; <ShoppingCart />
          </button>

          <Link
            href={`/courses/${course.name}`}
            className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-black dark:hover:bg-gray-900 dark:focus:ring-gray-800"
          >
            Read more &nbsp;&nbsp; <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
