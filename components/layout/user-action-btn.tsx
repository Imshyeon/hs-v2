import { Button } from "@nextui-org/button";

export default function UserActionBtn() {
  return (
    <Button
      id="user_action_btn"
      size="sm"
      className="absolute bottom-3 right-3 p-4 bg-layout-activeBtn/70 hover:bg-layout-activeBtn/90 w-fit h-fit backdrop-blur-md z-10 rounded-xl cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#3F4344"
        className="w-6 h-6 fill-sidebar-btn hover:fill-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    </Button>
  );
}
