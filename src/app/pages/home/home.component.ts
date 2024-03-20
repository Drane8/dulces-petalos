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
    filteredProducts: Product[] = [];

    constructor(private _productsService: ProductService) {}

    ngOnInit(): void {
        this._productsService.getProducts().subscribe((products) => {
            this.products = products;
            this.filteredProducts = products;
        });
    }

    searchProduct(text?: string): void {
        const textNormalized = this._normalizeText(text?.trim());
        if (!text || text === '') {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = this.products.filter(
                (product) =>
                    this._normalizeText(product.binomialName).toLowerCase().includes(textNormalized.toLowerCase()) ||
                    this._normalizeText(product.name).toLowerCase().includes(textNormalized.toLowerCase()),
            );
        }
    }

    private _normalizeText(text: string | undefined): string {
        return text?.normalize('NFD').replace(/[\u0300-\u036f]/g, '') ?? '';
    }
}
