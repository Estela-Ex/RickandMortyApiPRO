import img from '../../../assets/render0001.png'
import { TextField, Box, Button, Typography, Checkbox, Grid } from "@mui/material";
export default function DetailsHome() {
 return (
   <>
     <h1 className="centrado">Bienvenidos a la api de Rick and Morty</h1>
     <Grid container spacing={2}>
       <Grid item xs={6} md={7}>
         <img className="home-img" src={img} />
       </Grid>
       <Grid item xs={6} md={5}>
         <Typography variant="h5" sx={{ mr: 16, mt: 16, textAlign: "center" }}>
           Inicia Sesión
         </Typography>
         <Box
           sx={{
             display: "flex",
             flexDirection: "column",
             p: 2,
             mr: 16,
             border: "1px solid grey",
             borderRadius: 2,
           }}
         >
           <TextField label="Email" size="small" sx={{ mb: 2 }} />
           <TextField label="Password" size="small" sx={{ mb: 2 }} />
           <span>
             Recordar contraseña <Checkbox defaultChecked />
           </span>
           <Button variant="contained" sx={{ mb: 2 }}>
             Login
           </Button>
         </Box>
       </Grid>
     </Grid>
   </>
 );
}