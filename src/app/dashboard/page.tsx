"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome, {user.firstName || user.username}!
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96 p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Dashboard
            </h2>
            {/* Add your dashboard content here */}
            <p className="text-gray-600 dark:text-gray-400">
              This is your personal dashboard. You can add your courses,
              progress, and other information here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
