import SidebarLinkBtn from "../ui/sidebar-link-btn";

export default function Sidebar() {
  return (
    <nav className="flex-grow-0 flex-shrink w-60 text-center p-8 bg-layout-sidebar-default z-10">
      <SidebarLinkBtn />
      <ul className="flex flex-col gap-5 mt-8">
        <li className="rounded-md p-2 hover:font-semibold cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="rounded-md p-2 hover:font-semibold cursor-pointer">
          여행2
        </li>
      </ul>
    </nav>
  );
}
