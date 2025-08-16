import { Component } from '@angular/core';
import { Card } from "../../common/card/card";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';

@Component({
  selector: 'app-product',
  imports: [CommonModule,],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  product: any;
  constructor(private route: ActivatedRoute, private api: Api) {}
  ngOnInit() {
    const id = this.route.snapshot.queryParams['id'];
    if (id) {
      this.api.getProductById(id).then((product: any) => this.product = product);
    }
  }
}
