"use client"
import DefaultNavbar from '@/components/default-navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Page() {
	const { data : session } = useSession({
		required: true,
		onUnauthenticated(){
			redirect('/api/auth/signin?callbackUrl=/authenticated')
		}
	})

	return (
		<div>
			<DefaultNavbar />
			<p> {session?.user?.name} </p>
		</div>
	)
}
