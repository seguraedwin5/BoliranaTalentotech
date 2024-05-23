import { Link } from "react-router-dom";

function Card({
  titulo = "default",
  rutaimagen = "https://th.bing.com/th/id/OIP.54V04Z2Z1fHZeUWfP2FNRgHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
  contenido = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae, ut iusto impedit soluta vel. Cupiditate assumenda culpa veniam blanditiis fugit repudiandae commodi illo soluta dolore. Quisquam magnam excepturi voluptatum",
  precio = "$12.500",
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
      <div>
        <img className="rounded-t-lg w-full h-56" src={rutaimagen} alt=""></img>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {titulo}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {contenido}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {precio}
        </h5>
        <Link
          to={"/"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comprar
          <svg
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="rtl:rotate-180 w-4 h-4 ms-2"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeWidth={1}
              d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"
            />
          </svg>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
