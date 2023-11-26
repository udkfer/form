import { useState } from "react";
import { useUserStore } from "../../store/userStore";
import { useFormStore } from "../../store/formStore";
import { createPost } from "../../api/postsService";
import { Modal, Grid, Typography, Button, TextField } from "@mui/material";
import styles from './style.module.css';

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUserStore();
  const { openPostModal, togglePostModal } = useFormStore();

  return (
    <Modal open={openPostModal} onClose={togglePostModal}>
      <div className={styles.modalContainer} style={{ width: "fit-content" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Make a Post</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={togglePostModal}
                style={{ width: "48%" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "48%" }}
                onClick={async () => {
                  await createPost({
                    title,
                    content,
                    authorId: user.id,
                  });
                  togglePostModal();
                }}
              >
                Publish
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}

export default PostForm;
