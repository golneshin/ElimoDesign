import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userData = await request.json();

    // Try to create/update the user in our database
    const user = await prisma.user.upsert({
      where: { email: userData.email_addresses[0].emailAddress },
      update: {
        name: `${userData.first_name} ${userData.last_name}`.trim(),
        imageUrl: userData.image_url,
        signedInDate: new Date(),
      },
      create: {
        email: userData.email_addresses[0].emailAddress,
        name: `${userData.first_name} ${userData.last_name}`.trim(),
        imageUrl: userData.image_url,
        signedInDate: new Date(),
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error syncing user to database:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
