import Layout from './components/Layout';
import Panel from './components/Panel';
import List from './components/List';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Panel title={'Countries'} />
        <List />
      </Layout>
    </ContextProvider>
  );
}

export default App;
