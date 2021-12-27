import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyListComponent } from './components/giphy-list/giphy-list.component';

const routes: Routes = [
  {
    path: '',
    component: GiphyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
