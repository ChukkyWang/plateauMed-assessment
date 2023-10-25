import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

export async function GET(request) {
  const res = await prisma.student.findMany();
  return NextResponse.json({ res });
}

export async function POST(request, response) {
  const {
    nationalId,
    name,
    surname,
    dateOfBirth,
    studentNumber,
  } = await request.json();

  const new_user = await prisma.student.create({
    data: {
      nationalId,
      name,
      surname,
      dateOfBirth,
      studentNumber,
    },
  });

  if (!new_user) {
    return NextResponse.json({ message: "An error occured" }, { status: 400});
  }

  return NextResponse.json({ new_user });
}
