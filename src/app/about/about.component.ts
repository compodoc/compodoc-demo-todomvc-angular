import { Component, OnInit, HostListener } from '@angular/core';

/**
 * The about component
 *
 * Display some text with links for details about TodoMVC & Compodoc.
 */
@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    ngOnInit() {

    }

    /**
     * HostListener mouseup description
     */
    @HostListener('mouseup')
    onMouseup(): void {

    }
}
