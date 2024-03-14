import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'minhas-listas/:listId/itens/:id',
    loadChildren: () => import('@features/list-items-form/list-items-form.module').then(m => m.ListItemsFormModule),
  },
  {
    path: 'minhas-listas/:listId/itens',
    loadChildren: () => import('@features/list-items/list-items.module').then(m => m.ListsItemModule),
  },
  {
    path: 'minhas-listas/:id',
    loadChildren: () => import('@features/lists-form/lists-form.module').then(m => m.ListsFormModule),
  },
  {
    path: 'minhas-listas',
    loadChildren: () => import('@features/lists/lists.module').then(m => m.ListsModule),
  },
  { path: '**', loadComponent: () => import('@features/not-found/not-found.component').then(c => c.NotFoundComponent) }
];
