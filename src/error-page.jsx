import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex items-center justify-center w-full h-screen m-auto">
      <div className="w-[80%] m-auto">
        <i class="fa-regular fa-face-sad-cry text-[3rem]"></i>
        <h1 className="text-[5rem] leading-none">404</h1>
        <p className="text-[3rem] leading-none">Oops!</p>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}