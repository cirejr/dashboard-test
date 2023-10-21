
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { LiaUsersSolid, LiaCogSolid } from 'react-icons/lia'
import { BsCardList } from 'react-icons/bs'
import { FaRotate } from 'react-icons/fa6'	

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

export const sidebarBottomMenu = [
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