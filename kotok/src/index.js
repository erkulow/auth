import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/authContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
