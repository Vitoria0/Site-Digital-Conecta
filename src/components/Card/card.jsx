import { Box } from "@mui/material";

export const Card = ({ imagem, link }) => {
  return (
    <Box
      component={link ? "a" : "div"}
      href={link || undefined}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      sx={{
        width: "100%",
        aspectRatio: "319/467",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE5301",
        padding: {xs:"0.3rem", md:"0.8rem"},
        cursor: link ? "pointer" : "default",
        pointerEvents: link ? "auto" : "none",
        transition: "transform 0.3s ease",
        "&:hover": link
          ? {
              transform: "scale(1.05)",
            }
          : {},
      }}
    >
      <img
        src={imagem}
        alt={"curso"}
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px", }}
      />
    </Box>
  );
};
