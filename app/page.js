import Image from "next/image";
import TodoList from "./(components)/TodoList";

async function getData() {
  // const res = await fetch('http://localhost/api/posts')
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function Home() {
  const todos = await getData();
  console.log(todos);
  return (
    <main className="">
      <div className="max-w-4xl mx-auto mt-4">
        <div className="my-5 flex-col gap-4">
          <h1 className="text-3xl font-bold mb-10">Todos</h1>
          {/* <AddPost /> */}
        </div>
        <TodoList className="" todos={todos} />
      </div>
    </main>
  );
}