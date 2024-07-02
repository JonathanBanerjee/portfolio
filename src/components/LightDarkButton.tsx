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
              padding: "1em 2em",
              fontSize: "1em",
              margin: "0.75%",
            }
          : {
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
              textDecoration: "none",
              background: "none white",
              border: "2px solid black",
              padding: "1em 2em",
              fontSize: "1em",
              margin: "0.75%",
            }
      }
      onClick={onClick}
      {...rest}
    >
      {mode}
    </button>
  );
}
