import '../assets/styles/gallery.css';
import img1 from '../assets/images/7owmamoef24a1.png';
import img2 from '../assets/images/1vrr3k5ff24a1.png';
import img3 from '../assets/images/u3lrowbff24a1.png';
import img4 from '../assets/images/49lwszlff24a1.png';

function Gallery() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <a href='#' className='frame'>
                    <img src={img1} alt='' id='img1' />
                    <p>final render</p>
                </a>
                <a href='#' className='frame'>
                    <img src={img2} alt='' id='img2' />
                    <p></p>
                </a>
                <a href='#' className='frame'>
                    <img src={img3} alt='' id='img3' />
                    <p></p>
                </a>
                <a href='#' className='frame'>
                    <img src={img4} alt='' id='img4' />
                    <p>reference</p>
                </a>
            </div>
            <a href='#img1' className='button left'>
                <div>
                    1
                </div>
            </a>
            <a href='#img4' className='button right'>
                <div>
                    2
                </div>
            </a>
        </div>
    );
}

export default Gallery;