/// <reference path="form-namespace.ts"/>

namespace Form1 {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {}
        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    export const myForm = new MyForm('devandtravel@gmail.com')
}

console.log(Form1.myForm)