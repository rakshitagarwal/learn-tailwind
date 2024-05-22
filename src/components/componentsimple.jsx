const Componentsimple = () => {
  return (
    <div className="flex">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden w-1/2 bg-white py-6">
        <div className="absolute inset-0   bg-center"></div>
        <div className="relative bg-blue-100 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <p className="ml-4">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">
                      Extracting classNamees with
                      <code className="text-sm font-bold text-gray-900">
                        @apply
                      </code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">
                  Want to dig deeper into Tailwind?
                </p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden w-1/2 bg-white py-6">
        <div className="absolute inset-0   bg-center"></div>
        <div className="relative bg-blue-100 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <p className="ml-4">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">
                      Extracting classNamees with
                      <code className="text-sm font-bold text-gray-900">
                        @apply
                      </code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">
                  Want to dig deeper into Tailwind?
                </p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Componentsimple;
