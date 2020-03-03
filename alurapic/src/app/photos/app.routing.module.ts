import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

const routes: Routes = [
    {path: 'user/flavio', component: PhotoListComponent},
    {path: 'p/add', component: PhotoFormComponent}
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}