const url = "https://jsonplaceholder.typicode.com/todos"

export default async function getData(){
	const res = await fetch(url)

	if(!res.ok){
		throw new Error('fetching failed!')
	}

	return res.json()
}