import MenuList from "./menu-list";
import menus from "./data";

export default function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
