
import Navbar from "@/components/dashboard/Navbar";
import SideBar from "@/components/dashboard/SideBar";
import '../../app/globals.css'


export default function Layout({children}) {
	return (
		<html>
			<body className={`grid md:grid-cols-12 w-full h-screen`}>
				<SideBar className="md:col-span-4" />
				<main className=" col-span-12 md:col-span-10">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}