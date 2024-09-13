import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  @Output()
  public createElement : EventEmitter<Show> = new EventEmitter();

  @Input()
  public show: Show | null = null;

  public isEdited: boolean = false;

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newShow: Show = {
        name: form.value.name,
        description: form.value.description,
        image: form.value.image,
        episodes: 0,
        year: 0,
        genre: "",
        likes: []
      }
  
      this.createElement.emit(newShow);
      form.resetForm();
    }
  }
}
