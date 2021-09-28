import { StyledButton } from "./style";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
}

export function Button(props: ButtonProps) {
  return (
    <StyledButton buttonClass={props.buttonClass} buttonText={props.buttonText}>
      {props.buttonText}
    </StyledButton>
    
  )
}