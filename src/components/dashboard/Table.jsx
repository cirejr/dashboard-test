
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import getData from '@/services/getData';

export default async function Table() {

	const data = await getData();

	console.log(" data is: ", data)

	return (
		<div className="card">
			<DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
				<Column field="id" header="ID" />
				<Column field="title" header="Name" />
				<Column field="completed" header="Status" />
			</DataTable>
		</div>
	);
}
