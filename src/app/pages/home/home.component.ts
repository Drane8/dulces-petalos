import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '@lib/services/product/product';
import { ProductService } from '@lib/services/product/product.service';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    constructor(private _productsService: ProductService) {}

    ngOnInit(): void {
        this._productsService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }
}
