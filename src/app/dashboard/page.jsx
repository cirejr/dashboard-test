import { DataTable } from "@/components/dashboard/table/data-table"
import { columns } from "./columns"


export async function getUsersData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')

	if (!res.ok) {
		throw new Error('fetching failed!')
	}

	return res.json()
}

export default async function Page() {
	const data = await getUsersData()

	return (
		<div className="pt-[100px] bg-slate-900 min-h-screen px-5 ">
			<DataTable columns={columns} data={data} />
		</div>
	)

}