import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';

@Component({
  selector: 'app-singleproductpage',
  imports: [RouterModule],
  templateUrl: './singleproductpage.html',
  styleUrl: './singleproductpage.css'
})
export class Singleproductpage {
 constructor(private api: Api, private route:ActivatedRoute) {}

  product: any;
  ngOnInit() {
   let id = this.route.snapshot.params['id'];
   this.api.getProductById(id).then((product: any) => this.product = product);
    }

  addToCart(product: any): void {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', product);
  }
}
