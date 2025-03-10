
import { QueryProviders } from '@my-monorepo/ui'
import './App.css'
import { TestPage } from './pages/TestPage/TestPage'
import "@my-monorepo/styles/style1.css"

function App() {

  return (
    <QueryProviders>
      <TestPage />
    </QueryProviders>
  )
}

export default App
