import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';
let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css'],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            flyInOut(),
            expand()
        ]
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map