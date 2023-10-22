"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"


export function DataTableToolbar({ table, data }) {
	const isFiltered = table.getState().columnFilters.length > 0
	const usernames = data.map(user => user.username)
	const emails = data.map(user => user.email)

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-wrap space-y-3 sm:space-y-0 flex-1 items-center space-x-2 md:gap-8">
				<Input
					placeholder="Filter names"
					value={(table.getColumn("name")?.getFilterValue()) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
					className="h-8 w-[150px] lg:w-[250px] mt-3 ml-2 sm:m-0"
				/>
				{table.getColumn("username") && (
					<DataTableFacetedFilter
						column={table.getColumn("username")}
						title="Username"
						options={usernames}
					/>
				)}
				{table.getColumn("email") && (
					<DataTableFacetedFilter
						column={table.getColumn("email")}
						title="Email"
						options={emails}
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset Filter
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	)
}