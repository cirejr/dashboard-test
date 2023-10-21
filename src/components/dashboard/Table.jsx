'use client'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { useContext, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext'
import { useRouter } from 'next/navigation';
import { FaSearchengin } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';

import getData from '@/services/getData';
import { GlobalContext } from '@/contexts/contextProvider';
import { InputSwitch } from 'primereact/inputswitch';

export default function Table() {
	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS }
	})
	const [globalFilterValue, setGlobalFilterValue] = useState('')
	const [todoSelected, setTodoSelected] = useState(null)
	const router = useRouter()

	const { data } = useContext(GlobalContext)

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters['global'].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const handleRowClick = (data) => {
		router.push(`/dashboard/todos/${data.data.id}`)
	};

	const renderHeader = () => {
		return (
			<div className="flex px-2 py-4 mb-5 bg-white shadow-xl rounded-lg">
				<span className="flex space-x-2 items-center px-3 py-1 border rounded-lg focus:outline-4 focus:border-2 ">
					<BsSearch className="" />
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder="Keyword Search"
						className='focus:outline-none'
					/>
				</span>
			</div>
		);
	};

	const header = renderHeader()

	return (
		<div className="p-2 z-0">
			{header}
			<DataTable
				value={data}
				dataKey='id'
				filterDisplay='row'
				filters={filters}
				globalFilterFields={['title']}
				paginator
				rows={5}
				showGridlines
				stripedRows
				selectionMode='checkbox'
				selection={todoSelected}
				onSelectionChange={(e) => setTodoSelected(e.value)}
				onRowClick={handleRowClick}
				emptyMessage="No Todos found"
				className='min-w-full bg-white p-2 rounded-lg mt-4 shadow-lg'
			>
				<Column selectionMode='multiple' />
				<Column field="userId" header="userId" className='w-1/6 border-b py-2' />
				<Column field="id" header="ID" className='w-1/6 border-b py-2' />
				<Column field="title" header="title" className='w-3/6 border-b py-2' />
				<Column field="completed" header="Status" className='w-1/6 border-b py-2' />
			</DataTable>
		</div >
	);
}
