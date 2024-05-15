function Input({name,placeholder}) {
    return ( 
        <input type="text" name={name} placeholder={placeholder} 
        className="
        px-4 py-2
        rounded-lg
        border-2 border-gray-300
        focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-teal-500
        transition-colors
        text-gray-700 placeholder-gray-400
        shadow-sm
        hover:border-teal-500
      "></input>
     );
}
export default Input;