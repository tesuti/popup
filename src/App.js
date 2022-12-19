import { Fragment } from 'react';
import './App.css';
import Modal from "./componets/Modal";

function App() {
  return (
  <Fragment>
    <div className='p10 text-center'>
      <h1 className="text-3xl md-5">
        Crate popup
      </h1>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">Text Modal
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">Vide Modal
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">Form Modal
      </button>
    </div>
    <Modal />
    </Fragment>
  );
}

export default App;
