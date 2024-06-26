import Recoil2 from './Recoil2';
import { useRecoilValue } from 'recoil';
import {rcnt} from './RecoilAtom';

export default function Recoil() {
  const cnt = useRecoilValue(rcnt);

  

  return (
    <div className="w-full h-full flex flex-col text-2xl font-bold justify-center items-center">
      Recoil : {cnt}
      <Recoil2/>      
    </div>
  )
}
