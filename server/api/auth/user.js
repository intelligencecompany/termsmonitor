
export default defineEventHandler(async (event) => {
  // Implement your logic to fetch user information here
  const user = { id: 1, name: 'John Doe' }
  return { user }
})