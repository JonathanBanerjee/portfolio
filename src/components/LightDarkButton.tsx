interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  mode: string;
}

export function LightDarkButton({ onClick, mode, ...rest }: ButtonProps) {
  return (
    <button
      style={
        mode === "Dark"
          ? { backgroundColor: "blue" }
          : { backgroundColor: "#F64740" }
      }
      onClick={onClick}
      {...rest}
    >
      {mode}
    </button>
  );
}
