import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useComContext } from "../../contexts/ComContextProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Container, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth } from "../../contexts/AuthContextProvider";
import { notify } from "../Toastify/Toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ListCom = () => {
  const { comments, getCom, delCom } = useComContext();
  const { prodId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    getCom(prodId);
  }, []);

  const del = (item) => {
    if (currentUser.user === item.author || currentUser.isAdmin === true) {
      delCom(item.id, prodId);
      notify("warning", "Comment deleted,successfully!");
    } else {
      notify("error", "Only admin and the author can delete comments!");
    }
  };

  //Edit
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getOneCom, oneCom, saveEditedCom, comForEdit } = useComContext();
  const [inpValues, setInpValues] = useState({
    title: "",
    author: currentUser.user,
    prodId: +prodId,
  });

  // useEffect(() => {
  //   if (comForEdit) {
  //     getOneCom(id);
  //   }
  // }, []);
  useEffect(() => {
    if (comForEdit && oneCom) {
      setInpValues(oneCom);
    }
  }, [oneCom]);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      title: inpValues.title,
    };
    getCom(prodId);
    saveEditedCom(obj);
    handleClose();
  };

  const edit = (item) => {
    if (currentUser.user === item.author) {
      handleOpen();
      getOneCom(item.id, prodId);
      getCom(item.prodId);
    } else {
      notify("error", "Only author can edit comments!");
    }
  };
  //Edit ends

  return (
    <Container>
      {comments.length > 0 ? (
        comments.map((item) => (
          <Container key={item.id}>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <AccountCircleIcon sx={{ width: "40px", height: "40px" }} />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <span
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.author}
                      </span>{" "}
                      <br />
                      <span>{item.title}</span>
                    </React.Fragment>
                  }
                />
                <IconButton onClick={() => del(item)}>
                  <DeleteOutlineIcon />
                </IconButton>
                {/* edit */}
                <IconButton onClick={() => edit(item)}>
                  <ModeEditIcon color="inherit" />
                </IconButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <TextField
                      name="title"
                      value={inpValues.title}
                      onChange={(e) => handleChange(e)}
                    >
                      Edit
                    </TextField>
                    <Button onClick={handleSubmit}>Save</Button>
                  </Box>
                </Modal>
                {/* edit ended */}
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Container>
        ))
      ) : (
        <h5>There is no comments, yet.</h5>
      )}{" "}
    </Container>
  );
};

export default ListCom;
