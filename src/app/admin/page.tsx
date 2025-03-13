"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users");
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    if (
      isLoaded &&
      user?.emailAddresses[0].emailAddress === "golneshin@gmail.com"
    ) {
      fetchUsers();
    } else {
      setLoading(false);
    }
  }, [isLoaded, user]);

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`/api/admin/users?userId=${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete user");
      }

      setUsers(users.filter((user) => user.id.toString() !== userId));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete user");
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md w-full mx-4"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  if (!user || user.emailAddresses[0].emailAddress !== "golneshin@gmail.com") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative max-w-md w-full mx-4"
          role="alert"
        >
          <strong className="font-bold">Unauthorized!</strong>
          <span className="block sm:inline">
            {" "}
            You don't have permission to access this page.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-2 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-700/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
          <div className="px-3 py-4 sm:px-6 sm:py-5 bg-gray-100/50">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Manage your users here
            </p>
          </div>
          <div className="border-t border-gray-600">
            <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead className="bg-gray-500/70">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-100 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-100 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-100 uppercase tracking-wider"
                      >
                        Signed In
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-100 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-50/50 divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-100/50 transition-colors"
                      >
                        <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {user.imageUrl && (
                              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                                <img
                                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                            )}
                            <div className="ml-2 sm:ml-4">
                              <div className="text-xs sm:text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                          <div className="text-xs sm:text-sm text-gray-900">
                            {user.email}
                          </div>
                        </td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                          <div className="text-xs sm:text-sm text-gray-900">
                            {user.signedInDate
                              ? new Date(user.signedInDate).toLocaleDateString()
                              : "Never"}
                          </div>
                        </td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                          <button
                            onClick={() => handleDeleteUser(user.id.toString())}
                            className="text-red-800 hover:text-red-900 transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
