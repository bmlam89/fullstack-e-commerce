import { useEffect, React } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Facebook, Google } from '@mui/icons-material';
import { setIsLoginOpen } from "../../../state/auth";

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -75%)',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.auth.isLoginOpen);
  const google = () => {
    window.open("http://localhost:6000/auth/google", "_self");
  };
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isLoginOpen}
        onClose={() => dispatch(setIsLoginOpen({}))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isLoginOpen}>
          <Box sx={style}>
            <Box id="signInDiv" sx={{ mt: 2 }}>
              <Button startIcon={<Google/>} onClick={google}>
                Sign in with Google
              </Button>
            </Box>
            
            {/*<Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>*/}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}