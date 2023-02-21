/* Style */
import './style.scss';

/* Modules */
import { Route, Routes } from 'react-router-dom';

/* Components */
// import Header from '../Header/Header';
import Landing from '../Landing/Landing';

function App() {

  return (
    <div className="App">
      <Routes>

        {/* HOME */}
        <Route path='/' element={
          <>
            {/* <Header /> */}
            <Landing />
            {/* <Footer /> */}
          </>}
        />

        {/* ARTWORK DETAIL PAGE */}
        {/* <Route path='/artwork/:id' element={<Artwork />} /> */}

        {/* ARTISTS */}
        {/* <Route path='/artists' element={<Artists />} /> */}

        {/* COLLECTIONS */}
        {/* <Route path='/collections' element={<Collections />} /> */}

        {/* CONVERTOR */}
        {/* <Route path='/convertor' element={<Convertor />} /> */}

        {/* COLLECTION */}
        {/* <Route path='/collection' element={<Collection />} /> */}

        {/* ROADMAP */}
        {/* <Route path='/roadmap' element={<RoadMap />} /> */}

        {/* CHARITY */}
        {/* <Route path='/charity' element={<Charity />} /> */}

        {/* SEARCH */}
        {/* <Route path='/search' element={<Search />} /> */}

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

        {/* PROFILE */}
        {/* <Route path='/profile' element={<Profile />} /> */}

        {/* SIGN UP */}
        {/* <Route path='/signup' element={<SignUp />} /> */}

        {/* SIGN IN */}
        {/* <Route path='/signin' element={<SignIn />} /> */}

        {/* CONTACT */}
        {/* <Route path='/contact' element={<Contact />} /> */}

        {/* Admin */}
        {/* <Route path='/login-team' element={<Admin />} /> */}
        {/* <Route path='/admin/dashboard' element={<Protected />} /> */}

      </Routes>
    </div>
  );
}

export default App;
