import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function Page({ params: { user } }) {

	console.log("id is: ", user)

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Card Title id is {user} </CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>

		</>
	);
}


