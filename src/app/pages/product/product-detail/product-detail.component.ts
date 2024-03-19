import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
    constructor(private _router: Router) {}

    goBack(): void {
        this._router.navigate(['']);
    }
}
