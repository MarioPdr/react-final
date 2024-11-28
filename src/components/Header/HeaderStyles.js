const headerStyles = {
  appBar: {
    background: "#dcdcdc",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: "109.6px",
    paddingBottom: "5px",
    borderBottom: "1px solid #ccc",
  },
  toolbar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: "107.6px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "flex-start" },
    height: "100%",
    marginRight: "auto",
    img: {  
      height: "80px",
      padding: "0 30px",
    },
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    color: "#000",
  },
  nav: {
    display: { xs: "none", md: "flex" },
    gap: "15px",
    marginLeft: "auto",
    marginTop: "30px",
  },
  navItem: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "color 0.3s",
    "&:hover": {
      color: "#ff0000",
    },
    "&.active": {
      color: "red",
    },
  },
};

export default headerStyles;
