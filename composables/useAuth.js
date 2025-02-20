import { ref } from 'vue'
import { useFetch } from '#app'

const user = ref(null)
const token = ref(null)

export function useAuth() {
  const login = async (credentials) => {
    const { data } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: credentials,
    })
    token.value = data.value.token
    await fetchUser()
  }

  const logout = async () => {
    await useFetch('/api/auth/logout', {
      method: 'POST',
    })
    token.value = null
    user.value = null
  }

  const fetchUser = async () => {
    const { data } = await useFetch('/api/auth/user', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
    user.value = data.value.user
  }

  return {
    user,
    token,
    login,
    logout,
    fetchUser,
  }
}
