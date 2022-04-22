import useUser from './lib/hooks/useUser'
import Index from './pages'
function App() {
  const { UserContextProvider } = useUser()
  return (
    <UserContextProvider>
      <Index />
    </UserContextProvider>
  )
}

export default App
