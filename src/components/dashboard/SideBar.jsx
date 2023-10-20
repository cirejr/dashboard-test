import Link from 'next/link'
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { LiaUsersSolid, LiaCogSolid } from 'react-icons/lia'
import { BsCardList } from 'react-icons/bs'
import { FaRotate } from 'react-icons/fa6'

import logo from "../../../public/assets/logo.png"
import Image from 'next/image'

export const sidebarMenu = [
	{
		pageName: "Tableau de bord ",
		link: "./dashboard",
		iconName: <LuLayoutDashboard />
	},
	{
		pageName: "campagnes",
		link: "./dashboard",
		iconName: <HiOutlineSpeakerWave />
	},
	{
		pageName: "Influenceurs",
		link: "/dashboard",
		iconName: <LiaUsersSolid />
	},
	{
		pageName: "Activités",
		link: "/dashboard",
		iconName: <BsCardList />
	},
	{
		pageName: "Conversions",
		link: "/dashboard",
		iconName: <FaRotate />
	},
]

const sidebarBottomMenu = [
	{
		pageName: "Paramètres",
		link: "/dashboard",
		iconName: <LiaCogSolid />
	},
	{
		pageName: "Déconnexions",
		link: "/dashboard",
		iconName: <LuLogOut />
	},
]

function SideBarMenu() {
	return (
		<>
			{sidebarMenu.map(navItem => (
				<div className='flex justify-center text-slate-500 hover:transition hover:delay-100 hover:bg-emerald-200 hover:bg-opacity-20 hover:rounded-r-lg hover:border-l-4 hover:border-green-700 hover:text-emerald-500 py-3'>
					<Link key={navItem.pageName}
						href={`/${navItem.link}`}
						className='flex items-center align-middle space-x-3 w-full px-2 md:px-0 lg:w-2/3'
					>
						{navItem.iconName}
						<p className=''>{navItem.pageName}</p>
					</Link>
				</div>
			))}
		</>
	)
}

function SideBarBottomMenu() {
	return (
		<main className='mt-10 absolute bottom-10 w-full '>
			{sidebarBottomMenu.map(navItem => (
				<div className='flex justify-center text-slate-500 hover:transition hover:delay-100 hover:bg-emerald-200 hover:bg-opacity-20 hover:rounded-r-lg hover:border-l-4 hover:border-green-700 hover:text-emerald-500 py-3'>
					<Link key={navItem.pageName}
						href={`/${navItem.link}`}
						className='flex items-center align-middle space-x-3 w-full px-2 md:px-0 lg:w-2/3'
					>
						{navItem.iconName}
						<p className=''>{navItem.pageName}</p>
					</Link>
				</div>
			))}
		</main>
	)
}

export default function SideBar() {
	console.log(sidebarMenu.map(navItem => <navItem.iconName />))
	return (
		<main className="flex flex-col md:col-span-2 grid-cols-none relative">
			<Image src={logo} alt='DevPhantom' width={80} height={80} className='my-8 self-center' />
			<SideBarMenu />
			<SideBarBottomMenu />
		</main>
	);
}

