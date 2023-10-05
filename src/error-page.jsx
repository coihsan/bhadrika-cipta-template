import { useRouteError } from "react-router-dom";
import {Link} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex items-center justify-center w-full h-screen m-auto">
      <div className="w-[80%] m-auto flex flex-col items-center">
        <i class="fa-regular fa-face-sad-cry text-[3rem]"></i>
        <p className="text-[3rem] leading-none">Oops!</p>
        <h1 className="text-[9rem] leading-none font-bold">404</h1>
        <p className="text-center">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={'/'} className="rounded-full py-2 px-6 bg-zinc-50 text-zinc-950 mt-[1rem] cursor-pointer">Back to Home</Link>
      </div>
    </div>
  );
}
