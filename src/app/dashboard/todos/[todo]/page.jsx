"use client"

import { GlobalContext } from "@/contexts/contextProvider";
import { stringify } from "postcss";
import { useContext } from "react";

export default function Todo({ params }) {
	const { data } = useContext(GlobalContext)
	const id = params.todo

	console.log("new data is :", data.filter(item => item.id == id))

	const todo = data.filter(item => item.id == id)

	console.log("list of todo is : ", todo)

	return (
		<main className="bg-gray-300 p-3 h-full">
			{todo.map(item => (
				<main key={item.id} className="w-full rounded-lg bg-white p-3 shadow-md drop-shadow-lg shadow-emerald-300">
					<p className="text-gray-500"> id of the todo is : <span className="font-bold text-2xl text-black">{item.id}</span> </p>
					<p> userId of the todo is : <span className="font-bold">{item.userId}</span> </p>
					<p> status of the todo is : {item.completed.toString()}</p>
					<p> title of the todo is : {item.title}</p>

				</main>
			))}
		</main>
	);
}