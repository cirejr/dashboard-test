import Image from "next/image";
import profile from '../../../public/assets/userProfile.png'

export default function () {
	return (
		<main className="flex justify-end h-20 shadow-md">
			<div className="flex space-x-2 items-center justify-center ">
				<p className="text-lg font-semibold">Jean David</p>
				<Image alt="profile pic" src={profile} className="rounded-full bg-white w-14 h-14" width={60} height={60} />
			</div>

		</main>
	);
}