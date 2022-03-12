export const isLogin = () => {
    let token = localStorage.getItem('accessToken');
    if (token) {
        return true
    }
    return false
}