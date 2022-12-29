import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import CircularProgress from '@mui/material/CircularProgress';

export const GifGrid = ({category}) => {
   const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( 
                    <div className="loading">
                        <CircularProgress color="inherit" />
                    </div>
                )
            }
            
            <div className="card-grid">
                {images.map((image) =>(
                    <GifItem  key={image.id} {...image}/>
                ))} 
            </div> 
        </>
    )
}
