import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34, 34, 34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  backgroundColor: 'rgb(0, 0, 0, 0.7)',
  zIndex: 1000,
};

export default function Model({ children, onClose }) {
 return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button
            className='btn bg-danger fs-4 '
            style={{ marginLeft: '95%', marginTop: '-1px' }}
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('cart-root')
  );


}
