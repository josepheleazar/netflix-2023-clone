import './App.css';
import './main.scss';

import { 
  PageFooter,
  PageHeader,
  PageRouting,
} from './components/Page';

function App() {
  return (
    <>
      <PageHeader />
      <PageRouting />
      <PageFooter />
    </>
  );
}

export default App;
