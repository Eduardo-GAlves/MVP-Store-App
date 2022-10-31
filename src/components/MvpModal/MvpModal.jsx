import AsainBtn from '../AsainBtn/AsainBtn';
// import MvpButton from '../MvpButton/MvpButton';
import './MvpModal.css'

function MvpModal({id = 'modal', onClose, title}) {
   const handleOutsideClick = (e) => {
      if( e.target.id === id) onClose();
   }

   return ( 
   <div id='modal' className="MvpModal" onClick={handleOutsideClick}>
      <div className="popup">
         <div className="popup__header">
            <button onClick={onClose} className='popup__close__button'>X</button>
         </div>
         <h2>{title}</h2>
         <div className="popup__content">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <AsainBtn titulo='enviar'/>
         </div>
      </div>
   </div>
    );
}

export default MvpModal;