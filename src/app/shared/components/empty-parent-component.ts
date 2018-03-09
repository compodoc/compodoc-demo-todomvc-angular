import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'empty-parent',
    template: 'empty parent'
})
export class EmptyParentComponent implements OnInit {
    @Input() public parentInput: string;

    @Output() public parentoutput;

    public parentProperty;

    ngOnInit() {}
}
