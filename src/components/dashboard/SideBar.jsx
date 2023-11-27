"use client"
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineCancel } from 'react-icons/md'
import logo from "../../../public/assets/logo.png"
import { sidebarMenu, sidebarBottomMenu } from '@/utils/sidebarItem'
import { useContext, useState } from 'react'
import { GlobalContext } from '@/providers/contextProvider'


function SideBarMenu({ onClick }) {
	return (
		<>
			{sidebarMenu.map(navItem => (
				<div className='flex justify-center text-slate-500 hover:transition hover:delay-100 hover:bg-emerald-200 hover:bg-opacity-20 hover:rounded-r-lg hover:border-l-4 hover:border-green-700 hover:text-emerald-500 py-3'>
					<Link key={navItem.pageName}
						href={`/${navItem.link}`}
						onClick={onClick}
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
		<main className='mt-10 absolute bottom-10 w-full z-20 '>
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

	const { isActive, setIsActive, screenSize } = useContext(GlobalContext)

	const handleCloseSideBar = () => {
		setIsActive(false)
	}

	return (
		isActive && (
			<div className="ml-3 h-screen pb-10 z-10">
				<main className="flex flex-col md:col-span-3">
					<div className='flex justify-between pl-4 md:p-0 md:self-center mb-3 md:my-8 md:items-start'>
						<Image src={logo} alt='DevPhantom' width={80} height={80} className='my-3' />
						<button
							type='button'
							onClick={handleCloseSideBar}
							className="text-xl text-gray-400 rounded-full p-3 hover:text-gray-700 block md:hidden self-start"
						>
							<MdOutlineCancel />
						</button>
					</div>
					<SideBarMenu onClick={handleCloseSideBar} />
					<SideBarBottomMenu />
				</main>
			</div>
		)
	);
}

