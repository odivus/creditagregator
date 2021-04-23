interface SideMenu {
  show: boolean;
  setShow: (state: boolean) => void;
  requestsLength: number | undefined;
}

export default SideMenu;