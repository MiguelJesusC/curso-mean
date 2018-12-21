import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Import User
import {UserEditComponent} from './components/user-edit.component';

//Import Artist
import {ArtistListComponent} from './components/artist-list.component';
import { ArtistAddComponent } from './components/artist-add.components';
import {ArtistEditComponent} from './components/artist-edit.components';

//Import Home
import {HomeComponent} from './components/home.component';




//Arrays de rutas 
const appRoutes: Routes = [
   
    {path:'', component: HomeComponent },
    {path:'artistas/:page', component: ArtistListComponent },
    {path:'crear-artistas', component: ArtistAddComponent },
    {path:'editar-artista/:id', component: ArtistEditComponent },
    {path:'mis-datos', component: UserEditComponent },
    {path:'**', component: HomeComponent }
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

