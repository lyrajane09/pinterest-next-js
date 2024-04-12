const Categories = () => {
   return (
      <>
         <nav className="w-full categories">
            <div className="max-w-screen-xl px-1 py-8 mx-auto">
               <div className="flex items-center">
                  <ul className="flex flex-col md:flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                     <li>
                        <a
                           href="#"
                           className="text-gray-900 dark:text-white"
                           aria-current="page"
                        >
                           Food
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-gray-900 dark:text-white"
                           aria-current="page"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-gray-900 dark:text-white"
                           aria-current="page"
                        >
                           Lifestyle
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-gray-900 dark:text-white"
                           aria-current="page"
                        >
                           Travel
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Categories;
