import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const todo = await prisma.todo.findUnique({
      where: { id },
    });
    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found", error },
        { status: 404 }
      );
    }
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ message: "GET Error", error }, { status: 500 });
  }
};

export const PATCH = async (req,{params})=>{
    try {
        const body = await req.json()
        const {title, item,completed} = body

        const {id} = params

        const updatedTodo = await prisma.todo.update({
            where:{id},
            data:{title,item,completed}
        })
        if(!updatedTodo){
            return NextResponse.json({message:'Update Failed'},{status:500})
        }
        return NextResponse.json(updatedTodo)
    } catch (error) {
        return NextResponse.json({message:'PATCH Error',error},{status: 500})
    }
}

export const DELETE = async (req,{params})=>{
    try {
        console.log('DELETE')
        const {id} = params

        await prisma.todo.delete({where:{id}
        })
        return NextResponse.json({message:'Todo Deleted'},{status:500})
    } catch (error) {
        return NextResponse.json({message:'DELETE Error',error},{status500})
    }
}