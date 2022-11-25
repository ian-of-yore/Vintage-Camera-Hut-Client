import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import ConfirmatinModal from './Pages/Shared/ConfirmationModal/ConfirmatinModal';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <ConfirmatinModal></ConfirmatinModal>
    </div>
  );
}

export default App;
