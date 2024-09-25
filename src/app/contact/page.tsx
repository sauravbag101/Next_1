'use client'

function Page() {
  return (
    <>
      <div className="flex justify-center h-screen mt-[115px] font-display">
        <div className="flex flex-col items-center w-8/12 space-y-6 ">
          {/* <svg className="w-36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable={false}>
            <g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M19.479&apos0 L1.583&apos0 C0.727&apos0 0&apos0.677 0&apos1.511 L0&apos19.488 C0&apos20.323 0.477&apos21 1.333&apos21 L19.229&apos21 C20.086&apos21 21&apos20.323 21&apos19.488 L21&apos1.511 C21&apos0.677 20.336&apos0 19.479&apos0"
                className="bug-text-color" transform="translate(63.000000&apos 0.000000)"></path>
              <path
                d="M82.479&apos0 L64.583&apos0 C63.727&apos0 63&apos0.677 63&apos1.511 L63&apos19.488 C63&apos20.323 63.477&apos21 64.333&apos21 L82.229&apos21 C83.086&apos21 84&apos20.323 84&apos19.488 L84&apos1.511 C84&apos0.677 83.336&apos0 82.479&apos0 Z M71&apos8 L73.827&apos8 L73.827&apos9.441 L73.858&apos9.441 C74.289&apos8.664 75.562&apos7.875 77.136&apos7.875 C80.157&apos7.875 81&apos9.479 81&apos12.45 L81&apos18 L78&apos18 L78&apos12.997 C78&apos11.667 77.469&apos10.5 76.227&apos10.5 C74.719&apos10.5 74&apos11.521 74&apos13.197 L74&apos18 L71&apos18 L71&apos8 Z M66&apos18 L69&apos18 L69&apos8 L66&apos8 L66&apos18 Z M69.375&apos4.5 C69.375&apos5.536 68.536&apos6.375 67.5&apos6.375 C66.464&apos6.375 65.625&apos5.536 65.625&apos4.5 C65.625&apos3.464 66.464&apos2.625 67.5&apos2.625 C68.536&apos2.625 69.375&apos3.464 69.375&apos4.5 Z"
                className="background" fill="#0a66c2"></path>
            </g>
            <g className="linkedin-text">
              <path
                d="M60&apos18 L57.2&apos18 L57.2&apos16.809 L57.17&apos16.809 C56.547&apos17.531 55.465&apos18.125 53.631&apos18.125 C51.131&apos18.125 48.978&apos16.244 48.978&apos13.011 C48.978&apos9.931 51.1&apos7.875 53.725&apos7.875 C55.35&apos7.875 56.359&apos8.453 56.97&apos9.191 L57&apos9.191 L57&apos3 L60&apos3 L60&apos18 Z M54.479&apos10.125 C52.764&apos10.125 51.8&apos11.348 51.8&apos12.974 C51.8&apos14.601 52.764&apos15.875 54.479&apos15.875 C56.196&apos15.875 57.2&apos14.634 57.2&apos12.974 C57.2&apos11.268 56.196&apos10.125 54.479&apos10.125 L54.479&apos10.125 Z"
                fill="#0a66c2"></path>
              <path
                d="M47.6611&apos16.3889 C46.9531&apos17.3059 45.4951&apos18.1249 43.1411&apos18.1249 C40.0001&apos18.1249 38.0001&apos16.0459 38.0001&apos12.7779 C38.0001&apos9.8749 39.8121&apos7.8749 43.2291&apos7.8749 C46.1801&apos7.8749 48.0001&apos9.8129 48.0001&apos13.2219 C48.0001&apos13.5629 47.9451&apos13.8999 47.9451&apos13.8999 L40.8311&apos13.8999 L40.8481&apos14.2089 C41.0451&apos15.0709 41.6961&apos16.1249 43.1901&apos16.1249 C44.4941&apos16.1249 45.3881&apos15.4239 45.7921&apos14.8749 L47.6611&apos16.3889 Z M45.1131&apos11.9999 C45.1331&apos10.9449 44.3591&apos9.8749 43.1391&apos9.8749 C41.6871&apos9.8749 40.9121&apos11.0089 40.8311&apos11.9999 L45.1131&apos11.9999 Z"
                fill="#0a66c2"></path>
              <polygon fill="#0a66c2" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533">
              </polygon>
              <path
                d="M16&apos8 L18.827&apos8 L18.827&apos9.441 L18.858&apos9.441 C19.289&apos8.664 20.562&apos7.875 22.136&apos7.875 C25.157&apos7.875 26&apos9.792 26&apos12.45 L26&apos18 L23&apos18 L23&apos12.997 C23&apos11.525 22.469&apos10.5 21.227&apos10.5 C19.719&apos10.5 19&apos11.694 19&apos13.197 L19&apos18 L16&apos18 L16&apos8 Z"
                fill="#0a66c2"></path>
              <path
                d="M11&apos18 L14&apos18 L14&apos8 L11&apos8 L11&apos18 Z M12.501&apos6.3 C13.495&apos6.3 14.3&apos5.494 14.3&apos4.5 C14.3&apos3.506 13.495&apos2.7 12.501&apos2.7 C11.508&apos2.7 10.7&apos3.506 10.7&apos4.5 C10.7&apos5.494 11.508&apos6.3 12.501&apos6.3 Z"
                fill="#0a66c2"></path>
              <polygon fill="#0a66c2" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
            </g>
          </svg> */}
          <p className="text-3xl mt-12">Lest's Add in our Community &apos One step begin</p>
          <div className="p-5 bg-white rounded-md w-96">
            <form className="space-y-4">
              <div className="space-y-0.5">
                <label className="text-sm text-gray-500" htmlFor="email">Email</label>
                <input className="block w-full p-1 mb-4 border border-gray-500 rounded" type="email" id="email" aria-label="Email" required />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-500" htmlFor="password">Password (6 or more characters)</label>
                {/* <input className="block w-full p-1 border border-gray-500 rounded" type="password" id="password" aria-label="Password" required Length="6" /> */}
              </div>
              <p className="text-xs text-center text-gray-500">
                By clicking Agree & Join&apos you agree to the LinkedIn
                <a className="font-medium hover:underline text-linkedin" href="#">User Agreement&apos</a>
                <a className="font-medium hover:underline text-linkedin" href="#">Privacy Policy&apos</a>
                and <a className="font-medium hover:underline text-linkedin" href="#">Cookie Policy</a>.
              </p>
              <button type="submit" className="w-full py-2 text-white rounded-full bg-linkedin hover:bg-linkedin-dark">Agree & Join</button>
            </form>
            <div className="relative my-4">
              <hr className="w-full border-t border-gray-300" />
              <span className="absolute px-2 text-sm text-gray-500 -translate-x-1/2 bg-white left-1/2">or</span>
            </div>
            <button className="flex items-center justify-center w-full py-2 border border-gray-500 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M46.17 24.68c0-1.7-.15-3.34-.43-4.94H24v9.34h12.52c-.53 2.82-2.14 5.21-4.56 6.81v5.66h7.37c4.32-3.98 6.84-9.84 6.84-16.87z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.91-2.16 15.88-5.85l-7.37-5.66c-2.05 1.38-4.68 2.21-8.51 2.21-6.55 0-12.1-4.42-14.1-10.4H2.41v6.53C6.36 43.51 14.57 48 24 48z"></path>
                <path fill="#FBBC05" d="M9.9 28.29c-.95-2.82-.95-5.83 0-8.65v-6.53H2.41c-2.91 5.69-2.91 12.45 0 18.14L9.9 28.29z"></path>
                <path fill="#EA4335" d="M24 9.54c3.57 0 6.75 1.23 9.27 3.62l6.89-6.89C34.51 2.64 29.08 0 24 0 14.57 0 6.36 4.49 2.41 11.26l7.49 5.65c2-5.98 7.55-10.4 14.1-10.4z"></path>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

