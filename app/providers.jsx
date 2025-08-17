'use client'
import AuthProvider from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function Providers({ children, serverUserData = null, serverAccessToken = null }) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider serverUserData={serverUserData} serverAccessToken={serverAccessToken}>
                {children}
            </AuthProvider>
        </QueryClientProvider>
    )
}