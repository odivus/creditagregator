function getOutsideClick(clickItem: Element, nodeId: string): boolean {
  let target: any = clickItem;

  if (target.id === nodeId || target.id === 'menu-burger') {
    return false;
  }

  while (!target.id) {
    target = target.parentNode;
    if (!target) break;
    if (target.id === nodeId) return false;
  }

  return true;
}

export default getOutsideClick;