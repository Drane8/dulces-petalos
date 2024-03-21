import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FertilizerType, Product } from '@lib/services/product/product';
import { ProductService } from '@lib/services/product/product.service';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';

@Component({
    standalone: true,
    imports: [CommonModule, BreadcrumbModule],
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    product: Product = { id: '' };

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _productsService: ProductService,
        private _breadcrumbService: BreadcrumbService,
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            const id: string = params['id'] as string;
            this._productsService.getProductById(id).subscribe((product) => {
                this.product = product;
                this.product.fertilizerType = this._convertToFertilizerEnum(product.fertilizerType);
                this._breadcrumbService.set('@Home', 'Inicio');
                this._breadcrumbService.set('@Product', this.product.name ?? 'Product');
            });
        });
    }

    private _convertToFertilizerEnum(str?: string): FertilizerType | undefined {
        const colorValue = FertilizerType[str as keyof typeof FertilizerType];
        return colorValue;
    }

    goBack(): void {
        this._router.navigate(['']);
    }
}
