'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">TodoMVC Angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/introduction.html" data-type="entity-link" data-context-id="additional">Introduction</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/actions.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' : 'data-target="#xs-additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' }>
                                                <span class="link-name">Actions</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' : 'id="xs-additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/creation-of-a-todo.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Creation of a todo</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/edition-of-a-todo.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Edition of a todo</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/delete-a-todo.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Delete a todo</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/update-the-status-of-a-todo.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Update the status of a todo</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' : 'data-target="#xs-components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' :
                                            'id="xs-components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompodocComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompodocComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoMVCComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoMVCComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'data-target="#xs-components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' :
                                            'id="xs-components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'data-target="#xs-injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' :
                                        'id="xs-injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' }>
                                        <li class="link">
                                            <a href="injectables/TodoStore.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoStore</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' : 'data-target="#xs-components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' :
                                            'id="xs-components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' : 'data-target="#xs-components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' :
                                            'id="xs-components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' : 'data-target="#xs-components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' :
                                            'id="xs-components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link" >ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' : 'data-target="#xs-components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' :
                                            'id="xs-components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' }>
                                            <li class="link">
                                                <a href="components/ListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' :
                                            'id="xs-components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                            <li class="link">
                                                <a href="components/TodoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' :
                                        'id="xs-directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                        <li class="link">
                                            <a href="directives/DoNothingDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoNothingDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' :
                                            'id="xs-pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' }>
                                            <li class="link">
                                                <a href="pipes/FirstUpperPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstUpperPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/EmptyComponent.html" data-type="entity-link" >EmptyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptyParentComponent.html" data-type="entity-link" >EmptyParentComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/StringIndexedItems.html" data-type="entity-link" >StringIndexedItems</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EmitterService.html" data-type="entity-link" >EmitterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmptyService.html" data-type="entity-link" >EmptyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/NoopInterceptor.html" data-type="entity-link" >NoopInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/NoopGuard.html" data-type="entity-link" >NoopGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClockInterface.html" data-type="entity-link" >ClockInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterfaceWithIndexable.html" data-type="entity-link" >InterfaceWithIndexable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelledTodo.html" data-type="entity-link" class="deprecated-name">LabelledTodo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchFunc.html" data-type="entity-link" >SearchFunc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StringArray.html" data-type="entity-link" >StringArray</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/superString.html" data-type="entity-link" >superString</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeInterface.html" data-type="entity-link" >TimeInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});