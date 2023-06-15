import { Box, FormControlLabel, Switch, AppBar, Toolbar, TextField, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


export default function Navbar(props){
    const openCat = Boolean(props.anchorElCat)
    const openDie = Boolean(props.anchorElDie)
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <LocalDiningIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    REACT Restaurant
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Box>
                        <FormControlLabel label='Dark mode' control={<Switch checked={props.check} onChange={props.change} size='small' color='success' />} />
                    </Box>
                    <TextField label='Search a food item'
                        size='small'
                        color='success'
                        value={props.search}
                        onChange={(e)=>props.handleSearch(e.target.value)}/>

                    <Button color='inherit' onClick={()=>props.handleFilter()}>Cuisines</Button>
                    <Button 
                        color='inherit' 
                        id='category-button' 
                        onClick={(e)=>props.handleAnchorElCat(e.currentTarget)}
                        aria-controls={openCat ? 'category-menu' : undefined} 
                        aria-haspopup='true' 
                        aria-expanded={openCat ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                        anchororigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformorigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>Category</Button>
                    <Button 
                        color='inherit' 
                        id='dietary-button' 
                        onClick={(e)=>props.handleAnchorElDie(e.currentTarget)}
                        aria-controls={openDie ? 'dietary-menu' : undefined} 
                        aria-haspopup='true' 
                        aria-expanded={openDie ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                        anchororigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformorigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>Dietary</Button>
                </Stack>

                <Menu 
                    id='category-menu' 
                    anchorEl={props.anchorElCat} 
                    open={openCat} 
                    MenuListProps={{
                        'aria-labelledby': 'category-button',
                    }} onClose={()=>props.handleAnchorElCat(null)}>
                    <MenuItem onClick={()=>props.handleFilter("Appetizers")}>Appetizers</MenuItem>
                    <MenuItem onClick={()=>props.handleFilter("Main Courses")}>Main Courses</MenuItem>
                    <MenuItem onClick={()=>props.handleFilter("Desserts")}>Desserts</MenuItem>
                    <MenuItem onClick={()=>props.handleFilter("Beverages")}>Beverages</MenuItem>
                </Menu>
                <Menu 
                    id='dietary-menu' 
                    anchorEl={props.anchorElDie} 
                    open={openDie}
                    MenuListProps={{
                        'aria-labelledby': 'dietary-button',
                    }} onClose={()=>props.handleAnchorElDie(null)}>
                    <MenuItem onClick={()=>props.handleFilter("Vegan")}>Vegan</MenuItem>
                    <MenuItem onClick={()=>props.handleFilter("Gluten-Free")}>Gluten-Free</MenuItem>
                    <MenuItem onClick={()=>props.handleFilter("Dairy-Free")}>Dairy-Free</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
