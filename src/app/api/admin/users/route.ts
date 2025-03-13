import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

const ADMIN_EMAIL = "golneshin@gmail.com";

// GET /api/admin/users
export async function GET(request: NextRequest) {
  try {
    const { userId } = await getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the current user from our database
    const currentUser = await prisma.user.findFirst({
      where: { email: ADMIN_EMAIL },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const users = await prisma.user.findMany({
      orderBy: {
        signedInDate: "desc",
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error in GET /api/admin/users:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/users/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the current user from our database
    const currentUser = await prisma.user.findFirst({
      where: { email: ADMIN_EMAIL },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userIdToDelete = parseInt(params.id);
    if (isNaN(userIdToDelete)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    await prisma.user.delete({
      where: {
        id: userIdToDelete,
      },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in DELETE /api/admin/users:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
