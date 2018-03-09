import { Component, Input, OnInit } from '@angular/core';

import { EmptyParentComponent } from './empty-parent.component';

@Component({
    selector: 'cp-empty',
    template: 'empty component'
})
export class EmptyComponent extends EmptyParentComponent {
    @Input() public emptyInput: string;
}
