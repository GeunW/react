import MainHeader from './MainHeader';
import Hello from './Hello';
import './App.css';
import MyClock from '../01-1/MyClock';

function App() {
  return (
    <> {/* 프레그먼트 태그 */}
      <div className="App">
        {/* <MainHeader />
        <Hello />
        <Hello />
        <Hello /> */}
        <MyClock/>
      </div>
    </>
  );
}

//화살표 함수 ok
//const App ( ) => {
// return();
//}

export default App; //모듈을 내보내줘야 함!
