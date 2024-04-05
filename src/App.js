
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello'; 
//import MyClock from './01_1/MyClock';
//import HelloCss from './02/HelloCss';
//import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
//import MyListMain from './04/MyListMain';
import BoxOfficeTb from './05-1/BoxOfficeTb';
import Lotto from './06/Lotto';
//import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock'
//import TrafficMain from './09/TrafficMain';
//import RefVal from './10/RefVal';
//import RefInput from './10/RefInput';
//import BoxOffice from './00/BoxOffice'
//import GalleryCard from './11/GalleryCard';
import GalleryMain from './11/GalleryMain';
import FestivalMain from './Festival/FestivalMain';
//import RouteMain from './13/RouteMain';
import Frcst from './14/Frcst';
// import UltraSrtFrcst from './14/UltraSrtFrcst';
// import VilageFrcst from './14/VilageFrcst';
import FrcstList from './14/FrcstList';


function App() {

  return (
    <BrowserRouter>
      <div className='flex flex-col 
                    w-full max-w-screen-xl 
                    h-screen
                    mx-auto
                    overscroll-y-auto
                    '>
        <header className='flex justify-between items-center
                         h-20 p-10 
                         text-xl font-bold text-blue-800
                         bg-slate-200
                        '>
          <div>리액트실습</div>
          <div className='flex justify-end '>

            <div className='mx-2 p-2 hover:bg-blue-400 rounded-md hover:text-white'>
              <Link to='/Frcst'>예보</Link></div>
            <div className='mx-2 p-2 hover:bg-blue-400 rounded-md hover:text-white'>
              <Link to='/FestivalMain'>축제</Link></div>

            <div className='mx-2 p-2 hover:bg-blue-400 rounded-md hover:text-white'>
              <Link to='/GalleryMain'>갤러리</Link></div>

            <div className='mx-2 p-2 hover:bg-blue-400 rounded-md hover:text-white'>
              <Link to='/BoxOffice'>박스오피스</Link></div>

            <div className='mx-2 p-2 hover:bg-blue-400 rounded-md hover:text-white'>
              <Link to='/Lotto'>로또</Link></div>

          </div>
          <div><Link to='/'><FaHome className='text-2xl text-black' /></Link></div>
        </header>

        <main className='grow flex flex-col justify-center items-center'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/BoxOffice' element={<BoxOfficeTb />} />
            <Route path='/GalleryMain' element={<GalleryMain />} />
            <Route path='/FestivalMain' element={<FestivalMain />} />
            <Route path='/Frcst' element={<Frcst />} />
            {/* <Route path='/UltraSrtFrcst/:dt/:area/:x/:y' element={<UltraSrtFrcst />} />
            <Route path='/VilageFrcst/:dt/:area/:x/:y' element={<VilageFrcst />} /> */}
            <Route path='/flist' element={<FrcstList />} />
          </Routes>
        </main>

        <footer className='flex justify-center items-center
                          h-20 bg-slate-800
                          text-base text-white'>
          ⓒ 2024 KimKyungMin. All right reserved.
        </footer>
      </div >
    </BrowserRouter >
  );
}


//화살표 함수로 작성가능
// const App = () => {

//   return ();
// }

export default App;
