import NavBar from '@/components/shared/NavBar'
import SideBar from '@/components/shared/SideBar'
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <div className='w-full h-screen flex'>
            <SideBar />
            <main className='w-full h-full flex flex-col justify-start overflow-y-auto'>
                <NavBar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout