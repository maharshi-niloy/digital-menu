import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';

import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Data from './Data'
import Alerts from './Components/Alerts'

export default function App() {
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState('')
    const [notifyCat,setNotifyCat] = useState(false)
    const [notifyDie,setNotifyDie] = useState(false)
    const [anchorElCat, setAnchorElCat] = useState(null)
    const [anchorElDie, setAnchorElDie] = useState(null)
    const [noFilter,setNoFilter] = useState(null)
    const [darkMode, setDarkMode] = useState(false)
    const darkTheme = createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      });
    const handleSearch = (val) => {
      setSearch(val)
    }
    const handleAnchorElCat = (val) => {
      setAnchorElCat(val)
    }
    const handleAnchorElDie = (val) => {
        setAnchorElDie(val)
      }
    const handleFilter = (val) => {
        setFilter(val)
        setAnchorElCat(null)
        setAnchorElDie(null)
        if (val==="Appetizers" || val==="Main Courses" || val==="Desserts" || val==="Beverages") setNotifyCat(true)
        else if (val==="Vegan" || val==="Gluten-Free" || val==="Dairy-Free") setNotifyDie(true)
        else setNoFilter(true)
    }

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
            <Grid container spacing={1}>
                <Navbar handleFilter={handleFilter}
                check={darkMode} change={()=>setDarkMode(!darkMode)}
                handleAnchorElCat={handleAnchorElCat} anchorElCat={anchorElCat}
                handleAnchorElDie={handleAnchorElDie} anchorElDie={anchorElDie}
                handleSearch={handleSearch} search={search}
                />

                <Alerts notifyCat={notifyCat} notifyDie={notifyDie} noFilter={noFilter}
                handleNotifyCat={()=>setNotifyCat(false)}
                handleNotifyDie={()=>setNotifyDie(false)}
                handleNoFilter={()=>setNoFilter(false)}
                />
                
        {Data&& Data.filter((item) => {
            if (filter === 'Appetizers'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else
                return item.category.includes("Appetizers");
            }else if(filter === 'Main Courses'){ 
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else
                return item.category.includes("Main Courses");
            }else if(filter === 'Desserts'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else 
                return item.category.includes("Desserts");
            }else if(filter === 'Beverages'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else
                return item.category.includes("Beverages");
            }else if (filter === 'Vegan'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else
                return item.dietary.includes("Vegan");
            }else if (filter === 'Gluten-Free'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else
                return item.dietary.includes("Gluten-Free");
            }else if (filter === 'Dairy-Free'){
                if (search !== ''){
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }else{
                    return item.dietary.includes("Dairy-Free");
                }
            }else if (search !== ''){
                return item.name.toLowerCase().includes(search.toLowerCase());
            }else return item;
        }).map((item,index)=><Grid item lg={3} md={3} sm={4} xs={6}><Cards key={index} name={item.name} desc={item.desc} price={item.price} img={item.img} category={item.category} dietary={item.dietary} ingred={item.ingred} prepTime={item.prepTime} /></Grid>)}
            </Grid>
        </div>
    </ThemeProvider>
  );
}
