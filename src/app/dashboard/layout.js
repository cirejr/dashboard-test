
import Navbar from "@/components/dashboard/Navbar";
import SideBar from "@/components/dashboard/SideBar";
import { Inter } from 'next/font/google'
import '../../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
	return (
		<html>
			<body className={`${inter.className} grid grid-cols-1 md:grid-cols-12 w-full h-screen`}>
				<SideBar className="md:col-span-4" />
				<main className=" col-span-12 md:col-span-10">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}