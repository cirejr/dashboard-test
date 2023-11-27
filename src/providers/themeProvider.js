"use client"
import { NextUIProvider } from '@nextui-org/system'
import React from 'react'

export default function ThemeProvider({children}) {
	return (
		<NextUIProvider>
			{children}
		</NextUIProvider>
	)
}
