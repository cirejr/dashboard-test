'use-client'

import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { LiaUsersSolid, LiaCogSolid } from 'react-icons/lia'
import { BsCardList } from 'react-icons/bs'
import { GiCardExchange } from 'react-icons/gi'
import { FaRotate } from 'react-icons/fa6'

import Link from 'next/link'


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
				<Link key={navItem.pageName}
					href={`/${navItem.link}`}
					className='flex items-center space-x-3 hover:transition hover:delay-100 hover:bg-emerald-200 hover:bg-opacity-20 hover:rounded-lg hover:border-l-2 hover:border-green-700 hover:text-emerald-500 px-8 py-3'
				>
					{navItem.iconName}
					<p className=''>{navItem.pageName}</p>
				</Link>
			))}
		</>
	)
}

function SideBarBottomMenu() {
	return (
		<main className='mt-10 absolute bottom-10 w-full '>
			{sidebarBottomMenu.map(navItem => (
				<Link key={navItem.pageName}
					href={`/${navItem.link}`}
					className='flex items-center space-x-3 hover:transition hover:delay-100 hover:bg-emerald-200 hover:bg-opacity-20 hover:rounded-lg hover:border-l-2 hover:border-green-700 hover:text-emerald-500 px-8 py-3'
				>
					{navItem.iconName}
					<p className=''>{navItem.pageName}</p>
				</Link>
			))}
		</main>
	)
}

export default function SideBar() {
	console.log(sidebarMenu.map(navItem => <navItem.iconName />))
	return (
		<main className="flex flex-col md:col-span-2 grid-cols-none relative">
			<SideBarMenu />
			<SideBarBottomMenu className="items-end justify-end align-bottom content-end" />
		</main>
	);
}

