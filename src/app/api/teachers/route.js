import { NextResponse } from "next/server";

export async function GET(request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request, response) {
  const {
    nationalId,
    title,
    name,
    surname,
    dateOfBirth,
    teacherNumber,
    salary,
  } = await request.json();

  try {
    const new_user = await prisma({
      data: {
        nationalId,
        title,
        name,
        surname,
        dateOfBirth,
        teacherNumber,
        salary,
      },
    });

    return NextResponse.json({ new_user });
  } catch (error) {
    NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}
