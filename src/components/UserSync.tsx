"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserSync() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (user) {
        try {
          const response = await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email_addresses: user.emailAddresses,
              first_name: user.firstName,
              last_name: user.lastName,
              image_url: user.imageUrl,
            }),
          });

          if (!response.ok) {
            console.error("Failed to sync user data");
          }
        } catch (error) {
          console.error("Error syncing user data:", error);
        }
      }
    };

    if (isLoaded && user) {
      syncUser();
    }
  }, [user, isLoaded]);

  return null;
}
