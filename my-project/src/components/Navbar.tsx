import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="h-16 flex align-middle items-center">
      <img src="./logo.png" alt="" width="150px" />
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="space-x-10">
          <NavigationMenuItem>
            <NavigationMenuTrigger>HOME</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>FEATURES</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>PRICING</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
