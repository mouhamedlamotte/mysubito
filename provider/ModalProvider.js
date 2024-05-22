import React, { createContext, useContext, useState } from 'react'
import CustomModal from '../components/CustomModal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalConfig, setModalConfig] = useState({
        visible: false,
        type: '',
        message: '',
      });
    
      const showModal = (type, message) => {
        setModalConfig({
          visible: true,
          type,
          message,
        });
      };
    
      const hideModal = () => {
        setModalConfig({
          ...modalConfig,
          visible: false,
        });
      };
    
      return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
          {children}
          <CustomModal
            visible={modalConfig.visible}
            onClose={hideModal}
            type={modalConfig.type}
            message={modalConfig.message}
          />
        </ModalContext.Provider>
      );
}

export const useModal = () => useContext(ModalContext);