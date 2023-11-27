"use client"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useContext, useEffect } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { GlobalContext } from "@/providers/contextProvider";
import LogoutButton from "../logout-button";

export default function () {
	const {
		isActive, setIsActive,
		screenSize, setScreenSize, } = useContext(GlobalContext);


	return (
		<main className={`flex justify-between h-20 shadow-md bg-background z-20 fixed ${isActive ? 'w-[calc(100%-286px)]' : 'w-full'}`}>
			<button
				className="text-lg text-gray-400 hover:text-gray-600 pl-2"
				onClick={() => setIsActive(prevState => !prevState)}
			>
				<AiOutlineMenu />
			</button>
			<div className="flex space-x-2 items-center justify-center mr-3 ">
				<LogoutButton />
				<p className="text-lg font-semibold">Jean David</p>
				<Avatar>
					<AvatarImage src="https://github.com/cirejr.png" />
					<AvatarFallback>CJr</AvatarFallback>
				</Avatar>
			</div>

		</main>
	);
}