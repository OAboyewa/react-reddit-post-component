import '../componets/gallery.css';
import img1 from './public/images/1vrr3k5ff24a1.png'

function Gallery() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <img src={img1} alt='' />
                <img src='./public/images/7owmamoef24a1.png' alt='' />
                <img src='./public/images/49lwszlff24a1.png' alt='' />
                <img src='./public/images/u3lrowbff24a1.png' alt='' />
            </div>
        </div>
    );
}

export default Gallery;