import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ SignInComponent ],
    imports: [CommonModule, ReactiveFormsModule]
})
export class HomeModule { }