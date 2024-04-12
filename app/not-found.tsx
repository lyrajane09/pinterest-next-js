import { headers } from "next/headers";
import Link from "next/link";

const NotFound = () => {
   const headerList = headers();
   const domain = headerList.get("host");
   // const data = await getSiteData(domain)

   return (
      <>
         <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
         </div>
      </>
   );
};

export default NotFound;
