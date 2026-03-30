export const handleAuthError = (error, logout) => {
    if (error?.message?.includes('401') || error?.message?.includes('Unauthorized')) {
        logout()
        window.location.href = '/login'
    }
}