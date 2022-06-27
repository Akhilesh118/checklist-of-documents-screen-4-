import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
const routes: Routes = [
{
  path : '',
  component : AppComponent,
  children : [
    {
      path : '',
      component : ChecklistComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
