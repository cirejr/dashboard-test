"use client"

import {
	flexRender,
	getCoreRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { DataTableToolbar } from "./data-table-toolbar"

export function DataTable({ data, columns }) {
	const [sorting, setSorting] = useState([])
	const [columnFilters, setColumnFilters] = useState([])
	const [rowSelection, setRowSelection] = useState({})
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		getFacetedUniqueValues: getFacetedUniqueValues(),
		state: {
			sorting,
			columnFilters,
			rowSelection,
		},
	})

	console.log("data in data-table is :", data)

	return (
		<>
			{/* Filter section */}
			<section className="bg-white p-5 rounded-md mb-5 space-y-3">
				<p className="font-semibold">Recherches d'influenceurs</p>
				<DataTableToolbar table={table} data={data} />
			</section>

			{/* main table section */}
			<section className="bg-white p-5 rounded-md">
				<div className="flex justify-between items-center pt-3">
					<p className="font-semibold">Liste des influenceurs <span className="text-muted-foreground text-lg">{data.length}</span></p>
					<CustomModal table={table} />
				</div>
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
											</TableHead>
										)
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan={columns.length} className="h-24 text-center">
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>

				<div className="flex justify-between items-center pt-3">

					{/* Moaal section */}
					<CustomModal table={table} />

					{/* Pagination */}
					<div className="flex items-center justify-end space-x-2 ">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div>

			</section>
		</>
	)
}

const CustomModal = ({ table }) => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className="flex-1 text-sm my-2 bg-emerald-600 rounded-sm px-3 py-2 text-white">
					<p><span className="font-semibold">({table.getFilteredSelectedRowModel().rows.length})</span> Inviter</p>
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Choix de la campagne </DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Nom de la campagne
						</Label>
						<Select>
							<SelectTrigger className="">
								<SelectValue placeholder="campagne" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="2022">Automne hiver 2022 -20%</SelectItem>
								<SelectItem value="2021">Automne hiver 2021 -20%</SelectItem>
								<SelectItem value="2020">Automne hiver 2020 -20%</SelectItem>
							</SelectContent>
						</Select>

					</div>
					<div className="items-center gap-4">
						<Label htmlFor="budget" className="text-right">
							Budget par influenceurs
						</Label>
						<Input
							id="name"
							type="tel"
							defaultValue="20"
							className="col-span-3"
						/>
					</div>
					<div className="items-center gap-4">
						<Label htmlFor="cost" className="text-right">
							Coût par actions
						</Label>
						<Input
							id="name"
							type="tel"
							defaultValue="20"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" className="bg-emerald-600">Envoyer l'invitation</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
