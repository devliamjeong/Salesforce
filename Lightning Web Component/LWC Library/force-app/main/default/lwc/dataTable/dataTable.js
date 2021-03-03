import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


const columns=[
    { label:'Name', fieldName:'NAME_FIELD' },
    { label:'Phone', fieldName:'PHONE_FIELD'},
    { label:'Email', fieldName:'EMAIL_FIELD'}
];

export default class DataTable extends LightningElement {

    data = CONTACT_OBJECT;
    columns = columns;

}