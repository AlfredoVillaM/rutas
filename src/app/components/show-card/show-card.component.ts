import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();

  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter();

  // @Input()
  // public name: string = ""

  // @Input()
  // public description: string = ""

  // @Input()
  // public image: string = ""

  @Input()
  public show: Show = {
    name: "",
    description: "",
    image: "",
    episodes: 0,
    year: 0,
    genre: "",
    likes: []
  };

  public isSelected: boolean = false;

  public changeSelected(): void {
    this.isSelected = !this.isSelected;
  }

  public onDeleteCard(): void {
    this.deleteCard.emit(this.show.name);
  }

  public onEditCard(): void {
    this.editCard.emit(this.show);
  }
}
