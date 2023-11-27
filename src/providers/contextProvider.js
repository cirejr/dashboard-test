"use client"
import getData from "@/services/getData";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null)

export default function ContextProvider({ children }) {
	const [screenSize, setScreenSize] = useState(undefined);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [ isActive, setIsActive ] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getData();
			setData(data);
		}

		fetchData();
	}, []);

	const value = {
		isActive, setIsActive, 
		data, setData, 
		isSidebarOpen, setIsSidebarOpen,
		screenSize, setScreenSize	
	}

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
