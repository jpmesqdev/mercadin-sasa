import styled from "styled-components";

interface StyledButtonProps {
  buttonClass: string;
  buttonText: string;
}

export const StyledButton = styled.button<StyledButtonProps>`

  border: ${({buttonClass}) =>
    buttonClass === 'solid' && '0' || 
    buttonClass === 'outline' && '1px solid var(--color-primary)'
  };
  border-radius: 0.5rem;
  padding: 1rem 5rem;
  margin-right: 1rem;
  font-weight: 700;
  transition: ease 0.25s;

  &:hover {
    filter: brightness(0.9);
  }

  // fazer if statement para props
  color: ${({buttonClass}) => 
    buttonClass === 'solid' && 'var(--color-white)' ||
    buttonClass === 'outline' && 'var(--color-primary)'
  };
  background-color: ${({buttonClass}) => 
    buttonClass === 'solid' && 'var(--color-primary)' ||
    buttonClass === 'outline' && 'var(--color-transparent)'
  };

`;