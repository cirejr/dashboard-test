"use client"
import React from 'react'
import { Button } from './ui/button'
import { LuLogOut } from 'react-icons/lu'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
	const router = useRouter()

	return (
		<Button onClick={() => signOut()}>
			<LuLogOut />
		</Button>
	)
}
