import MyDiv3 from "./MyDiv3";

export default function MyDiv2(props) {
  console.log(props)

  return (
    <div className="w-4/5 h-2/3
    flex flex-col justify-center items-center
    bg-slate-50 text-red-500">
      <p className="w-4/5 flex justify-start
        font-bold text-2xl
        my-5">
        {`${props.d1} > ${props.d2}`}
      </p>
      <MyDiv3 d1={props.d1} d2={props.d2} d3={props.d3}/>

    </div>
  )
}


