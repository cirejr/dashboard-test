import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { getUsersData } from "../../page";
import { CustomModal } from "@/components/dashboard/table/data-table";
import { Button } from "@/components/ui/button";

function InfoInline({ title, value }) {
	return (
		<>
			<div className="flex justify-between text-xs">
				<p className="text-muted-foreground">{title}</p>
				<p className="font-semibold">{value}</p>
			</div>
		</>
	)
}

function InfoBlock({ foundUser }) {
	return (
		<>
			<div className="flex flex-col space-y-2">
				<InfoInline title="Genre" value="Homme" />
				<InfoInline title="Ville" value={foundUser.address.city} />
				<InfoInline title="Site Web" value={foundUser.website} />
			</div>
		</>
	)
}

export default async function Page({ params: { id } }) {

	const data = await getUsersData()

	const foundUser = data.find(user => user.id == id)

	console.log("special user is:", foundUser)

	return (
		<main className="p-3 bg-slate-900 pt-[100px] h-screen">
			<Card>
				<CardHeader >
					<div className="flex justify-between w-full">
						<div className="flex space-x-2 items-center">
							<Avatar className="w-20 h-20">
								<AvatarImage src="https://github.com/cirejr.png" />
								<AvatarFallback>CJr</AvatarFallback>
							</Avatar>
							<div className="flex flex-col gap-1">
								<p className="font-semibold">{foundUser.name}</p>
								<p className="text-sm text-muted-foreground">@{foundUser.username}</p>
								<p className="text-blue-600 text-xs font-semibold">Profil verifier</p>
							</div>
						</div>
						<Button className="bg-emerald-600 hover:bg-emerald-800 px-8">Inviter</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<InfoBlock foundUser={foundUser} />
						<InfoBlock foundUser={foundUser} />
						<InfoBlock foundUser={foundUser} />
						<InfoBlock foundUser={foundUser} />
					</div>
				</CardContent>
			</Card>

		</main>
	);
}


