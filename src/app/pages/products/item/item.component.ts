import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemComponent {
  @Input() product!: Product;
  @Output() addToCardClick = new EventEmitter<Product>();

  onClick(): void {
    this.addToCardClick.emit(this.product);
  }

}
