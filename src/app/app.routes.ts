import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "tvshows", component: TvshowsComponent },
    { path: "tvshow", redirectTo: "tvshows", pathMatch: "full" }, // Ruta incorrecta
    { path: "", redirectTo: "home", pathMatch: "full" }, // Ruta inicial
    { path: "not-found", component: NotFoundComponent }, // Rutas no deseadas
    { path: "**", redirectTo: "not-found", pathMatch: "full" }, // Rutas no deseadas
];
