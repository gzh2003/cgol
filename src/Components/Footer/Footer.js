import { useState } from "react";
import { red } from "@mui/material/colors";
import {
  Stack,
  Box,
  Button,
  Typography,
  Avatar,
  Link,
  Modal,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";

function Footer(props) {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  return (
    <footer>
      <div className="footer-flex-row footer-content">
        <div className="footer-content-right">
          <Avatar
            className="footer-item"
            alt="gzh2003"
            src="https://github.com/gzh2003.png?size=460"
            sx={{ width: 25, height: 25 }}
          />
          <Typography className="footer-item" fontSize={{ xs: 12, sm: 16 }}>
            Made with{" "}
          </Typography>
          <FavoriteIcon
            className="footer-item"
            sx={{ color: red[500], width: 15, height: 15 }}
          />
          <Typography className="footer-item" fontSize={{ xs: 12, sm: 16 }}>
            by{" "}
            <Link
              href="https://github.com/gzh2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              gzh2003
            </Link>
          </Typography>
        </div>

        <Button
          onClick={handleModalOpen}
          variant="contained"
          color="warning"
          sx={{ p: 2, height: 28 }}
        >
          Info
        </Button>
        <Modal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
        >
          <Box
            width={{ xs: 6 / 10, sm: 400, md: 600 }}
            sx={{
              position: "absolute",
              borderRadius: 4,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              bgcolor: "background.paper",
              outline: 0,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              fontSize={{ xs: 18, sm: 24 }}
            >
              Conway's Game of Life
            </Typography>
            <Stack spacing={{ xs: 1, sm: 2 }} sx={{ mt: 2 }}>
              <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                The Game of Life is a cellular automaton devised by British
                mathematician John Conway.
              </Typography>

              <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                To play Conway's Game of Life, you must supply the grid with an
                initial state of live or dead cells, at which point a set of
                straightforward rules are iteratively applied to create new
                generations.
              </Typography>

              <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                These straight forward rules are as follows:
              </Typography>

              <Stack pl={{ xs: 2, sm: 2 }} spacing={1 / 2}>
                <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                  1. Any live cell with fewer than two live neighbours dies, as
                  if by underpopulation
                </Typography>
                <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                  2. Any live cell with two or three live neighbours lives on to
                  the next generation
                </Typography>
                <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                  3. Any live cell with more than three live neighbours dies, as
                  if by overpopulation
                </Typography>
                <Typography fontSize={{ xs: 11, sm: 14, md: 18 }}>
                  4. Any dead cell with exactly three live neighbours becomes a
                  live cell, as if by reproduction
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </div>
    </footer>
  );
}

export default Footer;
