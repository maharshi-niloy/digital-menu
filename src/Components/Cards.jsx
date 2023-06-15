import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import { useState } from 'react'

export default function Cards(props) {
  const {name, desc, price, img, category, dietary, ingred, prepTime} = props
  const [pointer,setPointer] = useState(false)
  const [click,setClick] =useState(false)
  return (
    <Card sx={{ maxWidth: 310 }}
      onMouseEnter={()=>setPointer(true)}
      onMouseLeave={()=>setPointer(false)}
      onClick={()=>click ? setClick(false) : setClick(true)}
      >
      <CardMedia component='img' height='140' image={img} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {desc}
        </Typography>

        {click&& (
          <div>
            <Typography gutterBottom variant='subtitle2' component='div'>
              <b>Ingredients:</b> {ingred}
            </Typography>
            <Typography gutterBottom variant='subtitle2' component='div'>
              <b>Preparation Time:</b> {prepTime}
            </Typography>
          </div>
        )}

        {pointer&& (
        <div>
          <Typography gutterBottom variant='subtitle2' component='div'>
            <b>Category:</b> {category}
          </Typography>
          <Typography gutterBottom variant='subtitle2' component='div'>
            <b>Dietary:</b> {dietary}
          </Typography>
        </div>
        )}

        <Typography gutterBottom variant='subtitle1' component='div'>
          <b>Price:</b> {price}৳
        </Typography>
      </CardContent>
    </Card>
  )
}

