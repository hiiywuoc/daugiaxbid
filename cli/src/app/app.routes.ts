import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { LayoutClinetComponent } from './layout/layout-clinet/layout-clinet.component';
import { ListComponent } from './pages/admin/list/list.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ViewComponent } from './pages/clent/view/view.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { ProductsComponent } from './pages/clent/products/products.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryEditComponent } from './pages/admin/category-edit/category-edit.component';
import { PhongdaugiaComponent } from './pages/clent/phongdaugia/phongdaugia.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BidsComponent } from './pages/admin/bids/bids.component';

export const routes: Routes = [
    // router ADMin
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'dashboard', component: DasboardComponent
            },
            {
                path: 'edit/:id', component: EditComponent
            },
            {
                path: 'list', component: ListComponent
            },
            {
                path: 'create', component: CreateComponent
            },
            {
                path: 'category', component: CategoryComponent
            },
            {
                path:'category-list',component:CategoryListComponent
            },
            {
                path:'category-edit/:id',component:CategoryEditComponent
            },
            {
                path: ':id/bids', component: BidsComponent
            }
        ]
    },
    // Router Client
    {
        path: '', component: LayoutClinetComponent, children: [
            {
                path: '', redirectTo: '', pathMatch: 'full'
            },
            {
                path: '', component: ProductsComponent
            },
            {
                path: 'view/:id', component: ViewComponent
            },
            {
                path: 'phongdaugia/:id',component:PhongdaugiaComponent
            }
        ]
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    }
];
