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
              textDecoration: "none",
              background: "none",
              border: "2px solid",
              padding: "1em 0",
              fontSize: "1em",
              width: "100px",
              // textAlign: "center",
            }
          : {
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
              textDecoration: "none",
              background: "none white",
              border: "2px solid",
              padding: "1em 0",
              fontSize: "1em",
              width: "100px",
              // textAlign: "center",
            }
      }
      onClick={onClick}
      {...rest}
    >
      {mode}
    </button>
  );
}
