import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDropdownsComponent } from './dynamic-dropdowns/dynamic-dropdowns.component';
import { TreeStructuredObjectComponent } from './tree-structured-object/tree-structured-object.component';

const routes: Routes = [
  {
    path: 'treeStructure',
    component: TreeStructuredObjectComponent,
  },
  {
    path: 'dynamicDropdown',
    component: DynamicDropdownsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
