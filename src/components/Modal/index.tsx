import React from 'react';
import ModalDOM from './ModalDOM';
import { DesktopContainer, HeaderContainer } from './styles';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen)
    return (
      null
    )
  return (
    <ModalDOM isBackDrop={onClose}>
      <DesktopContainer>
        <HeaderContainer>
          Character Information
        </HeaderContainer>
        {children}
      </DesktopContainer>
    </ModalDOM>
  )
};
