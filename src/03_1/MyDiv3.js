export default function MyDiv3(props) {
  
    return (
    <div className="w-4/5 h-2/3
    flex justify-start items-center
    bg-red-700 text-amber-300">
        <p className="w-4/5 flex justify-center
        font-bold text-2xl
        my-5">
            {`${props.d1} > ${props.d2} > ${props.d3}`}
        </p>
      
</div>
  )
}


