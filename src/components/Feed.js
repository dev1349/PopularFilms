import {Card,CardMedia,Typography,CardContent} from '@mui/material'
import {useSelector} from "react-redux";
const Feed = ()=>{
    const popular= useSelector(state=>state.film.popular)
    return(
        popular && popular.map(filmInfo=> {
            const imageUrl= 'https://image.tmdb.org/t/p/w500' + filmInfo.poster_path
            return(

                <Card key={filmInfo.id} sx={{marginBottom:'40px'}}>
                    <CardMedia
                        component='img'
                        src={imageUrl}
                        height='200px'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {
                                filmInfo.original_title
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                filmInfo.overview
                            }
                        </Typography>
                    </CardContent>
                </Card>
            )
            }
        )
    )
}
export default Feed