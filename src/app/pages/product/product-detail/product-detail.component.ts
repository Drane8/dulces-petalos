import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@lib/services/product/product';
import { ProductService } from '@lib/services/product/product.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    product: Product = { id: '' };

    constructor(private _router: Router, private _route: ActivatedRoute, private _productsService: ProductService) {}

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            const id: string = params['id'] as string;
            this._productsService.getProductById(id).subscribe((product) => {
                this.product = product;
            });
        });
    }

    goBack(): void {
        this._router.navigate(['']);
    }
}
