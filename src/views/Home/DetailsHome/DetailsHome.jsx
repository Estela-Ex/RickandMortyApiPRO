import img from '../../../assets/render0001.png'
import { Grid } from "@mui/material";
import Login from '../../../components/Login/Login';
export default function DetailsHome() {
 return (
   <>
     <h1 className="centrado">Bienvenidos a la api de Rick and Morty</h1>
     <Grid container spacing={2}>
       <Grid item xs={6} md={7}>
         <img className="home-img" src={img} />
       </Grid>
       <Grid item xs={6} md={5}>
         <Login/>
       </Grid>
     </Grid>
   </>
 );
}