"use client"
import Image from "next/image";
import profile from '../../../public/assets/userProfile.png'
import { useContext, useEffect } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { GlobalContext } from "@/contexts/contextProvider";

export default function () {
	const {
		isActive, setIsActive,
		screenSize, setScreenSize, } = useContext(GlobalContext);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		window.removeEventListener('resize', handleResize)
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setIsActive(false)
		} else {
			setIsActive(true)
		}

	}, [screenSize])

	return (
		<main className="flex justify-between h-20 shadow-md z-20 bg-white w-full">
			<button
				className="text-lg text-gray-400 hover:text-gray-600 pl-2"
				onClick={() => setIsActive(prevState => !prevState)}
			>
				<AiOutlineMenu />
			</button>
			<div className="flex space-x-2 items-center justify-center ">
				<p className="text-lg font-semibold">Jean David</p>
				<Image alt="profile pic" src={profile} className="rounded-full bg-white w-14 h-14" width={60} height={60} />
			</div>

		</main>
	);
}