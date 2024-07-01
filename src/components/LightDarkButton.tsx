interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  mode: string;
}

export function LightDarkButton({ onClick, mode, ...rest }: ButtonProps) {
  return (
    <button
      style={
        mode === "Dark"
          ? {
              backgroundColor: "#212121",
              borderColor: "white",
              borderRadius: "20%",
            }
          : {
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
              borderRadius: "20%",
            }
      }
      onClick={onClick}
      {...rest}
    >
      {mode}
    </button>
  );
}
