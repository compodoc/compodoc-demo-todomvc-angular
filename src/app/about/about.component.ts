import { Component, OnInit, HostListener } from '@angular/core';

import { EmptyService } from '../shared/services/empty.service';
import { DoNothingDirective } from '../shared/directives/do-nothing.directive';

/**
 * The about component
 *
 * Display some text with links for details about TodoMVC & Compodoc.
 */
@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    providers: [EmptyService],
    hostDirectives: [DoNothingDirective],
})
export class AboutComponent implements OnInit {
    ngOnInit() {}

    /**
     * HostListener mouseup description
     */
    @HostListener('mouseup')
    onMouseup(): void {}
}
