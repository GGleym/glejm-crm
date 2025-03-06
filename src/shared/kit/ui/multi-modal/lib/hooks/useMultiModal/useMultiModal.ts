import {useContext} from 'react'

import {MultiModalContext} from './multi-modal-provider';

export const useMultiModal = () => {
  const context = useContext(MultiModalContext);

  if (!context) {
    throw new Error('useMultiModal must be used within a MultiModalProvider');
  }

  return context;
};
