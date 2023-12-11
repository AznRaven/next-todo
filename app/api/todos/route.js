import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, item, completed } = body;
    let updatedCompleted = completed; // Declare a new variable using let

    if (updatedCompleted === undefined || updatedCompleted === null) {
      updatedCompleted = false; // Reassign the variable
    }

    const newTodo = await prisma.todo.create({
      data: {
        title,
        item,
        completed: updatedCompleted, // Use the updated variable here
      },
    });

    return NextResponse.json(newTodo);
  } catch (error) {
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
};



export const GET = async () => {
  try {
    const todos = await prisma.todo.findMany();

    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ message: "GET Error", error }, { status: 500 });
  }
};
