import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex items-center justify-center h-screen p-24 bg-gradient-to-tr from-black to-blue-950">
			<div className='w-full h-full flex items-center justify-center'>
				<Link className='absolute z-20 rounded-lg p-5 shadow-lg shadow-slate-600 text-xl text-white bg-white bg-opacity-10' href="/dashboard">Navigate to the dashboard</Link>
			</div>

		</main>
	)
}
