import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';


function  Shop({shopping}){
  const {title,description,price,discoutPersentage,rating,stock,brand,category,thumbnail,images} = shopping
  return(
<div className='cards'>
  <img src= {images} alt = ''/>
<h1>{shopping.title}</h1>
<p>{shopping.description}</p>
<p>{shopping.price}</p>
<p>{shopping.discountPersentage}</p>
<div className='rating'>
<Rating
          name='read only'
          value={rating}
          emptyIcon={
            <StarIcon
              style={{ opacity: 0.55, color: 'white' }}
              fontSize='inherit' />
          }
          readOnly />
</div>

<p>{shopping.stock}</p>
<h2>{shopping.brand}</h2>
<p>{shopping.category}</p>
<img src= {thumbnail} alt = ''/>
<img src ={images} alt =''/>
</div>
  )
}

export default Shop