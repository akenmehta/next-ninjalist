import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, []);

  return ( 
    <div className="not-found">
      <h1>Ooops...</h1>
      <p>Page not found!</p>
      <p>Go back to the <Link href="/"><a>home page</a></Link></p>
    </div>
   );
}
 
export default NotFound;