import './logo.svg';
import './App.css';
import Tag from './componets/tag';
import Gallery from './componets/gallery';

function App() {
  return (
    <div>
      {/*Left*/}
      <div>

      </div>
      {/*Right*/}
      <div>
        <p>
          <img src='./logo.svg' />
          <strong><a href='#'>r/blender</a> </strong>
          . Posted by 
          <span> <a href='#'>u/bestrizz123</a></span>
          1 day ago
        </p>
        <p>
          I model simple objects for practice, tried my best for a clean topology.
        </p>
        <Tag href='#' text='Need Feedback' color='rgb(255, 69, 0)' />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
