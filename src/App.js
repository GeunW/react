
import './App.css';
//import { FaHome } from "react-icons/fa";

// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello'; 
// import MyClock from './01_1/MyClock';
//import HelloCss from './02/HelloCss';
//import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
//import MyListMain from './04/MyListMain';
//import BoxOfficeTb from './05-1/BoxOfficeTb';
//import Lotto from './06/Lotto';
//import FoodMain from './07/FoodMain';
//import MyClock from './08/MyClock'
//import TrafficMain from './09/TrafficMain';
//import RefVal from './10/RefVal';
//import RefInput from './10/RefInput';
//import BoxOffice from './00/BoxOffice'
//import GalleryCard from './11/GalleryCard';
//import GalleryMain from './11/GalleryMain';
import FestivalMain from './Festival/FestivalMain';


function App() {

  return (
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
      {/* ///<div><FaHome className='text-2xl text-black'/></div> */}
      </header>
      <main className='grow flex flex-col 
      justify-center items-center p-5'>
          <FestivalMain />
          
      </main>
      <footer className='flex justify-center items-center
                          h-20 bg-slate-800
                          text-base text-white'>
          ⓒ 2024 JeonGeunwoo. All right reserved. 
      </footer>
    </div>
  );
}


//화살표 함수로 작성가능
// const App = () => {

//   return ();
// }

export default App;
