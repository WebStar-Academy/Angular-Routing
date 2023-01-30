import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
   {
      path : '',
      redirectTo : 'contact-us',
      pathMatch : 'full'
   },
   {
      path : 'products',
      component : ProductsComponent
   },
   {
     path : 'product-details/:id',
     component : ProductDetailsComponent
   },
   {
     path : 'contact-us',
     component : ContactUsComponent
   },
   {
     path : 'carousel',
     component : CarouselComponent
   },
   {
      path : '**',
      redirectTo : 'contact-us',
      pathMatch : 'full'
   }
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { enableTracing: true })],
  exports : [RouterModule]
})
export class AppRoutingModule { }


// parameterzied route
