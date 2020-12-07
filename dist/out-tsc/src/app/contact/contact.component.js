import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.mail = { to: "46179r@unibit.bg", from: "", subject: "", text: "", name: "", tel: "", sendtype: "" };
    }
    ngOnInit() {
    }
    sendMail() {
        console.log(this.mail);
        this.http.post('http://localhost:3000/api/email', this.mail)
            .subscribe((res) => {
            console.log(res);
        });
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map