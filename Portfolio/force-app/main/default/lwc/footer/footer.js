import { LightningElement } from 'lwc';

export default class Footer extends LightningElement {
    
    connectedCallback() {

        this.curDateTime = new Date();

        this._interval = setInterval(() => {

            this.curDateTime = new Date();

        }, 1000);
    
    }

    
    curDateTime;

}