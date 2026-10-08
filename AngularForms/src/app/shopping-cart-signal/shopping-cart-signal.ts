import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-signal',
  imports: [],
  templateUrl: './shopping-cart-signal.html',
  styleUrl: './shopping-cart-signal.css',
})
export class ShoppingCartSignal {
  itemPrice = signal<number>(140);
  cartQuantity = signal<number>(0)
  total = computed(()=>this.itemPrice()*this.cartQuantity());

  increaseQuantity(){
    this.cartQuantity.update(()=>this.cartQuantity()+1);
  }
  decreaseQuantity(){
    this.cartQuantity.update(()=>this.cartQuantity()-1);
  }
}
