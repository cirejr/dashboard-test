
"use client"
import Navbar from "@/components/dashboard/Navbar";
import SideBar from "@/components/dashboard/SideBar";
import '../../app/globals.css'
import { useContext } from "react";
import { GlobalContext } from "@/contexts/contextProvider";


export default function Layout({children}) {
	const { isActive } = useContext(GlobalContext)
	return (
		<html>
			<body className={`flex relative w-full h-screen`}>
				{isActive ? (
					<div className="w-72 fixed z-10 bg-white">
						<SideBar />
					</div>
							) : (
					<div className="w-0">
						<SideBar />
					</div>
				)}
				<div className={
					`min-h-screen w-full ${ isActive ? 'md:ml-72 md:w-[calc(100%-288px)]' : 'flex-2'}`
				}>
					<div className="">
						<Navbar />
						{children}	
					</div>
				</div>	
			</body>
		</html>
	);
}