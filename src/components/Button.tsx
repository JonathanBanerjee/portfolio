interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ onClick, ...rest }: ButtonProps) {
  return (
    <button onClick={onClick} {...rest}>
      Button
    </button>
  );
}
