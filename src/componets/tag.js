import '../assets/styles/tag.css';

function Tag(props) {
    return (
        <a href={props.href} className='tag'>
            <span style={{
                background: props.color
                }}>
                {props.text}
            </span>
        </a>
    );
}

export default Tag;