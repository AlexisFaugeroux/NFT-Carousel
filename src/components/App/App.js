/* Style */
import './style.scss';

/* Modules */
import { Route, Routes } from 'react-router-dom';

/* Components */
import Landing from '../Landing/Landing';

function App() {

  return (
    <div className="App">
      <Routes>

        {/* HOME */}
        <Route path='/' element={
          <>
            <Landing />
          </>}
        />

        {/* ARTWORK DETAIL PAGE */}
        {/* <Route path='/artwork/:id' element={<Artwork />} /> */}

        {/* 404 */}
        <Route path='*' element=
          {
            <>
              {/* <Header /> */}
              {/* <NotFound404 /> */}
              {/* <Footer /> */}
            </>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
