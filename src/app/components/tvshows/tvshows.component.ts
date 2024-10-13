import { Component, inject } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgFor, NgIf } from '@angular/common';
import { ShowCardComponent } from '../show-card/show-card.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowFormComponent } from '../show-form/show-form.component';
import { SortCardsComponent } from '../sort-cards/sort-cards.component';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [NgFor, ShowCardComponent, FormsModule, NgIf, ReactiveFormsModule, ShowFormComponent, SortCardsComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css'
})
export class TvshowsComponent {
  private tvShowsService = inject(TvShowsService);

  public get text(): string {
    return this.tvShowsService.text;
  }

  form: FormGroup;
  isFormSubmitted: boolean = false;
  selectedShow: Show | null = null;

  constructor() {
    this.tvShowsService.fetchTvshows();

    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    })
  }

  public deleteElement(name: string): void {
    this.tvShowsService.deleteElement(name);
  }

  public createElement(show: Show): void {
    this.tvShowsService.createElement(show, this.selectedShow);

    if (this.selectedShow) {
      this.selectedShow = null;
    }
  }

  public sortByAlphabetic(): void {
    this.tvShowsService.sortByAlphabetic();
  }

  public reverseList(): void {
    this.tvShowsService.reverseList();
  }

  public editElement(show: Show): void {
    this.selectedShow = show;
  }

  public get shows(): Show[] {
    return this.tvShowsService.shows;
  }
}
