
export default function TailInput({type,inputRef,ph,handleChange}) {
  return (
    <input type={type} id="first_name" ref={inputRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-10"
            onChange={handleChange}
            placeholder={ph}>
      
    </input>
  )
}
