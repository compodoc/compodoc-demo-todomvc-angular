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
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
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
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' : 'data-bs-target="#xs-additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' }>
                                                <span class="link-name">Actions</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' : 'id="xs-additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' }>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' : 'data-bs-target="#xs-injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' :
                                        'id="xs-injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' }>
                                        <li class="link">
                                            <a href="injectables/TodoStore.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoStore</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link" >ListModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TodoModule-79cac753063bd00195b34a70c9d7f4905eb1029b9e6522b98d3af00b2a1d41600ba9b9372e179ccedcfd04f10d2351b118739a51a6db1fa6df7b00458d1a61e6"' : 'data-bs-target="#xs-pipes-links-module-TodoModule-79cac753063bd00195b34a70c9d7f4905eb1029b9e6522b98d3af00b2a1d41600ba9b9372e179ccedcfd04f10d2351b118739a51a6db1fa6df7b00458d1a61e6"' }>
                                            <span class="icon ion-md-funnel"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TodoModule-79cac753063bd00195b34a70c9d7f4905eb1029b9e6522b98d3af00b2a1d41600ba9b9372e179ccedcfd04f10d2351b118739a51a6db1fa6df7b00458d1a61e6"' :
                                            'id="xs-pipes-links-module-TodoModule-79cac753063bd00195b34a70c9d7f4905eb1029b9e6522b98d3af00b2a1d41600ba9b9372e179ccedcfd04f10d2351b118739a51a6db1fa6df7b00458d1a61e6"' }>
                                            <li class="link">
                                                <a href="pipes/FirstUpperPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstUpperPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
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
                            <li class="link">
                                <a href="components/TodoComponent.html" data-type="entity-link" >TodoComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BorderDirective.html" data-type="entity-link" >BorderDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DoNothingDirective.html" data-type="entity-link" >DoNothingDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightAndBorderDirective.html" data-type="entity-link" >HighlightAndBorderDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightDirective.html" data-type="entity-link" >HighlightDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/StringIndexedItems.html" data-type="entity-link" >StringIndexedItems&lt;T&gt;</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClockInterface.html" data-type="entity-link" >ClockInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterfaceWithIndexable.html" data-type="entity-link" >InterfaceWithIndexable&lt;T&gt;</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-funnel"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/StandAlonePipe.html" data-type="entity-link" >StandAlonePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
