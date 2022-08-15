import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item.directive";

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  //pega todos os filhos elemento da diretiva KeyboardManagerDirective
  //QueryList pega todos os itens
  @ContentChildren(KeyboardManagedItemDirective)
  public items!: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  public managerKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus;
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus;
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus;
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus;
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];
    if(targetElementFocus){
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT ? items[items.length -1] : items[0];
  }
}

enum ArrowDirection {
   LEFT = -1,
   RIGHT = 1
}
