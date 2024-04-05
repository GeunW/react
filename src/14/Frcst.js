import TailInput from '../UI/TailInput';
import TailSelect from '../UI/TailSelect';
import TailButton from '../UI/TailButton';
import { useState, useRef, useEffect } from 'react';
import getxy from './getxy.json';
import { useNavigate } from 'react-router-dom';

export default function Frcst() {
  console.log(getxy);
  const dRef = useRef();
  const sRef =useRef();  
  
  const ops = getxy.map(item => item['1단계'])
  
  const [x, setX] = useState();
  const [y, setY] = useState();
  
  const [dt, setDt] = useState();
  const [area, setArea] = useState();
 
  const navigator = useNavigate();

  
    const handleDate = () => {
      if(dRef.current.value===''||dRef.current.value===undefined)return;
      
      setDt(dRef.current.value.replaceAll('-',''))
            
      //console.log(dRef.current.value);
    }
    const handleArea = () => {
      
      if(sRef.current.value===''||sRef.current.value===undefined)return;

      let tm = getxy.filter(item => item['1단계'] === sRef.current.value);
      console.log(tm[0]["격자 X"]);
      console.log(tm[0]["격자 Y"]);
      
      setArea(sRef.current.value)
      setX(tm[0]["격자 X"])
      setY(tm[0]["격자 Y"])
    }

    useEffect(() => {
      
      console.log(x, y)
      
    },[x, y]);

    
    const handleFrcst = (loc) => {
      if(dt ===''|| dt === undefined){
        alert('날짜를 선택하세요');
        dRef.current.focus();
        return
      }
      if(area ===''||area === undefined){
        alert('지역을 선택하세요');
        sRef.current.focus();
        return
      }
      // navigator(`/${loc}/${dt}/${area}/${x}/${y}`)
      let gubun = '';
      if (loc === 'UltraSrtFrcst' ) gubun='초단기예보';
      else gubun = '단기예보';

      navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`)
    
    }
    // //초단기 예보
    // const handleUltra = () => {
    //   if(dt ===''|| dt === undefined){
    //     alert('날짜를 선택하세요');
    //     dRef.current.focus();
    //     return
    //   }
    //   if(area ===''||area === undefined){
    //     alert('지역을 선택하세요');
    //     sRef.current.focus();
    //     return
    //   }
    //   navigator(`/UltraSrtFrcst/${dt}/${area}/${x}/${y}`)
    // }
    // //단기 예보
    // const handleVilage = () => {
    //   if(dt ===''|| dt === undefined){
    //     alert('날짜를 선택하세요');
    //     dRef.current.focus();
    //     return
    //   }
    //   if(area ===''||area === undefined){
    //     alert('지역을 선택하세요');
    //     sRef.current.focus();
    //     return
    //   }
    //   navigator(`/VilageFrcst/${dt}/${area}/${x}/${y}`)
    // }
    
  
  return (
    <div className='w-full grid grid-cols-1 '>
      <TailInput
        type='date'
        inputRef={dRef}
        ph='날짜선택'
        handleChange={handleDate} />

      <TailSelect
        ops={ops}
        opDefault='---지역선택---'
        selRef={sRef}
        handleSelGu={handleArea} />
      <div>
        <TailButton caption='초단기예보' color="blue" handleClick={()=>{handleFrcst('UltraSrtFrcst')}}/>
      </div>
      <div>
        <TailButton caption='단기예보' color="blue" handleClick={()=>{handleFrcst('VilageFrcst')}} />
      </div>
    </div>
  )
}
