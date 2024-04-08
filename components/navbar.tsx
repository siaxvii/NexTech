import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
    return ( 
        <div className="border-b flex">
            <div className="flex h-16 items-center px-4">
                <div>
                    NexTech Admin Portal
                </div>
            </div>
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4 pr-5">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
     );
}
 
export default Navbar;