import { __makeTemplateObject } from "tslib";

export class Person {
    firstName: string;
    lastName: string;
    personId: string;
    email: string;
    username: string;
    password: string;
    password2: string;
    conditions: boolean;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.personId = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.password2 = "";
        this.conditions = false;
    }
}
