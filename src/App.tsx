import { FilterProvider } from './contexts/FilterContext'
import Chart from './pages/Chart'
import { Layout } from './styles/Cmn.style'

function App() {
  return (
    <FilterProvider>
      <Layout>
        <Chart />
      </Layout>
    </FilterProvider>
  )
}

export default App
