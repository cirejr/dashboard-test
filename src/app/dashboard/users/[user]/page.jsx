import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function Page({ users }) {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
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

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					name: 'next.js',
				},
			},
		],
		fallback: true,
	}
}

/* export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await res.json()
	return { props: { users } }
} */