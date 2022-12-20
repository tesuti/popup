import { Fragment, useState } from 'react';
import './App.css';
import Modal from "./componets/Modal";
import Moal from "./componets/abx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  return (
  <Fragment>
    <div className='p10 text-center'>
      <h1 className="text-3xl md-5">
        Crate popup
      </h1>
   
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"onClick={() =>setShowModal3(true)}>：
      </button>
    </div>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
    <h3 className='text-xl font0semibold text-gray-900 mb-5 '>編集</h3>
    <form>
    <div>
            <label for="email" 
            className='block mb-2 text-sm font-medium text-gray-900'>
              コメント
            </label>
            <input type="email"
            name="email"
            id="email"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='name@company.com'
            
            />
          </div>
          <div>
            <label for="email" 
            className='block mb-2 text-sm font-medium text-gray-900'>
             評価
            </label>
            <input type="email"
            name="email"
            id="email"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='name@company.com'
            
            />
          </div>
    </form>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)} >
        <p>コメントの削除
        </p>
        <p>コメントを完全に削除しますか？</p>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)} >
      <div className='py-6 px-6 lg:px-8 text-left'>
        <h3 className='mb-4 text-xl font-medium text-gray-900'>
          Sign in to platform
        </h3>

        
          </div>
          <div onClick={() =>setShowModal3(false)}>
          <button 
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring- focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center' 
         
          onClick={() =>setShowModal(true)}
           >編集</button>
           </div>
          <div onClick={() =>setShowModal3(false)}>
          <button 
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring- focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center' 
         
          onClick={() =>setShowModal2(true)}
           >削除</button>
           
       
      </div>
        
      </Modal>
    </Fragment>
  );
}

export default App;
