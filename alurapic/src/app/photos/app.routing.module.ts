import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { SignInCompoenent } from '../home/signin/signin.component';
import { PhotoListResolver } from './photo-list/photo-list.resolver';


const routes: Routes = [
    {path: '', component: SignInCompoenent },
    {path: 'user/:userName', 
    component: PhotoListComponent,
    resolve: {
        photos: PhotoListResolver
    }},
    {path: 'p/add', component: PhotoFormComponent},
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent}
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}