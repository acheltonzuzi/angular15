import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ProdutosDashboardComponent } from "./produtos-dashboard.component";


const produtosRouteConfig:Routes=[
    {path:'',component:ProdutosDashboardComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(produtosRouteConfig)
    ],
    exports:[RouterModule]
})
export class produtosRoutingModule{}