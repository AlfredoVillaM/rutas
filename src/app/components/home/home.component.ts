import { Component, inject } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private tvShowsService = inject(TvShowsService);

  public get text(): string {
    return this.tvShowsService.text;
  }
}
