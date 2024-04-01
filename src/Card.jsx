import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';



function Shop({shopping}){
const {id,title,description,price,discountPersentage,rating,stock,brand,category,thumbnail,images,} = shopping
return(
<div className="Cards">
<img src={images} alt =''/>
<h1>{shopping.title}</h1>
<p>{shopping.description}</p>
<span>{shopping.price}</span>
<p>{shopping.discountPersentage}</p>
<div className="rating">
<p>{shopping.rating}
<Rating
          name='read only'
          value={rating}
          emptyIcon={
            <StarIcon
              style={{ opacity: 0.55, color: 'white' }}
              fontSize='inherit' />
          }
          readOnly /></p>
</div>

<h2>{shopping.stock}</h2>
<p>{shopping.brand}</p>
<p>{shopping.category}</p>
<img src= {thumbnail} alt ='' />

</div>
)
}

export default Shop  