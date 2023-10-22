import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "./columns"


async function getUsersData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')

	if (!res.ok) {
		throw new Error('fetching failed!')
	}

	return res.json()
}

export default async function Page() {
	const data = await getUsersData()

	return (
		<div className="py-10 px-5 bg-gray-300">
			<DataTable columns={columns} data={data} />
		</div>
	)

}