import { useParams } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid
} from '@mui/material'
import { productsData } from './products-data'
function RenderItem() {
    let { productId } = useParams();
    let products = productsData
    return(
      <div className='products-container'>
        <Grid container spacing={3} className={'product-elements'}>
        {
          products[productId].map( (product, key) => {
            return (
              <Grid item>
              <Card className='render-item-card' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='200px'
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={9}>
                        <Typography gutterBottom variant='h5' component='div' >
                          {product.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography gutterBottom variant='h6' component='div'>
                          {"₹"}{product.cost}
                        </Typography>
                      </Grid>  
                    </Grid>  
                    <Typography variant='body2' color='text.secondary'>
                      {product.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            )
          })
        }
        </Grid>
      </div>  
    );
}
/* 

*/
export default RenderItem