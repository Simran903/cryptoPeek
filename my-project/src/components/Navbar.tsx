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
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="pt-5 h-16 flex align-middle items-center">
      <img src="./logo.png" alt="" width="150px" />
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="space-x-10">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavigationMenuItem className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 hover:bg-gradient-to-br text-white rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">HOME
            </NavigationMenuItem>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavigationMenuItem className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 hover:bg-gradient-to-br text-white rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">FEATURES
            </NavigationMenuItem>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavigationMenuItem className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 hover:bg-gradient-to-br text-white rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">PRICING
            </NavigationMenuItem>
          </motion.div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex pr-12 gap-3">
      <div className="">
        <DropdownMenu>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <DropdownMenuTrigger className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 hover:bg-gradient-to-br text-white rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Currency</DropdownMenuTrigger>
          </motion.div>
          <DropdownMenuContent>
            <DropdownMenuItem>USD</DropdownMenuItem>
            <DropdownMenuItem>EUR</DropdownMenuItem>
            <DropdownMenuItem>INR</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
