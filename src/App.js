import './App.css';
import Header from './components/Header';
import CreateApplicantForm from './components/CreateApplicantForm';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() { 
  return (
   
      <div className='App'>
        <Header headertext="Student Detail" />
        <CreateApplicantForm />
      </div>   
  );
}

export default App;
