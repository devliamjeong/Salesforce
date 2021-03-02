import { LightningElement } from 'lwc';

const columns=[
    { label:'Name', fieldName:'name' },
    { label:'Phone', fieldName:'phone'},
    { label:'Email', fieldName:'email'}
];

export default class DataTable extends LightningElement {

    data=[];
    columns = columns;

}