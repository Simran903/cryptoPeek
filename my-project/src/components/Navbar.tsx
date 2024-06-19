import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div className="pt-5 h-16 flex align-middle items-center">
      <img src="./logo.png" alt="" width="150px" />
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="space-x-10">
          <NavigationMenuItem className="inline-flex cursor-pointer h-9 w-max items-center justify-center rounded-md bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">HOME
          </NavigationMenuItem>
          <NavigationMenuItem className="inline-flex cursor-pointer h-9 w-max items-center justify-center rounded-md bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">FEATURES
          </NavigationMenuItem>
          <NavigationMenuItem className="inline-flex cursor-pointer h-9 w-max items-center justify-center rounded-md bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">PRICING
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="pr-12">
        <DropdownMenu>
          <DropdownMenuTrigger className=" inline-flex h-9 w-max items-center justify-center rounded-md bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">Currency</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>USD</DropdownMenuItem>
            <DropdownMenuItem>EUR</DropdownMenuItem>
            <DropdownMenuItem>INR</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
