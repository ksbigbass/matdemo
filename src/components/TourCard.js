import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import { Css } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme } from "@mui/material";

const theme = createTheme({
    components:{
        MuiTypography: {
            variants:[{
                props:{
                    variant:"body2",
                },
                style: {
                    fontSize:11,
                },

                props:{
                    variant:"body3",
                },
                style: {
                    fontSize:9,
                }
            }]
        }
    }
})



const TourCard = () =>{
    return(
        <Grid item xs={4}>
                <Paper elevation={3}>
                    <img src="coyote.jpg" className="img" />

                <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                        
                        This is a dog thingy

                        </Typography>
                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center"
                
                        }}
                    >    
                    <AccessTime sx={{width: 12.5}}/>
                    <Typography variant="body2" component="p" marginLeft={0.5}>This is a clock</Typography>    
                    </Box>
                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",                        
                         }}
                         marginTop={3}
                         >
                    
                
                            <Rating name="read-only" value={2.5} precision={.5} size="small" readOnly /> 
                            

                            <Typography variant="body2" component="p" marginLeft={0.5}  >2.5 stars</Typography>

                            <Typography variant="body2" component="p" marginLeft={0.5}  >(655 reviews)</Typography>

                            
                    </Box>
                </Box>
                <Box
                                    sx={{
                                        display:"flex",
                                        alignItems:"center",                        
                                    }}
                                    marginTop={1}
                            >
                            <Typography variant="body3" component="p" marginLeft={0.5}>Coyote has low ratings</Typography>
                            </Box>
                <Box>
                    <Typography variant="h6" component="h3" marginTop={0.5} padding={1}>$789</Typography>

                </Box>
                </Paper>
        </Grid>        
        
  

    );
    
};

export default TourCard;