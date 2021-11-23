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
                                            'data-target="#additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' : 'data-target="#xs-additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' }>
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
                                            'data-target="#components-links-module-AboutModule-e4fdc8a45ac0dc8ba6b0321570c5b288c2a06f2df796083026f02acac1b33f7f87b55fdb81d92ffe329e94c507e35d67fd9ae40644aa1420ede11ebd3f9c6878"' : 'data-target="#xs-components-links-module-AboutModule-e4fdc8a45ac0dc8ba6b0321570c5b288c2a06f2df796083026f02acac1b33f7f87b55fdb81d92ffe329e94c507e35d67fd9ae40644aa1420ede11ebd3f9c6878"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-e4fdc8a45ac0dc8ba6b0321570c5b288c2a06f2df796083026f02acac1b33f7f87b55fdb81d92ffe329e94c507e35d67fd9ae40644aa1420ede11ebd3f9c6878"' :
                                            'id="xs-components-links-module-AboutModule-e4fdc8a45ac0dc8ba6b0321570c5b288c2a06f2df796083026f02acac1b33f7f87b55fdb81d92ffe329e94c507e35d67fd9ae40644aa1420ede11ebd3f9c6878"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompodocComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompodocComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoMVCComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoMVCComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' : 'data-target="#xs-components-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' :
                                            'id="xs-components-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' : 'data-target="#xs-injectables-links-module-AppModule-dc46341d0af90a31f4312585ced9dbff5c7d4130a0302c2b02de9a50d84d685b10ed0d64b03d1e14eff960ee306389a9835a6c2311ee8545da29e197fe439424"' }>
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-e38aedbde5bbbcea84426817f2a25a464985aedd1f98d60dec550a332276ec7dce17d26f3b045ba22eaefddbce04477f36c1a1e11c40044222e3f8bbaffbfcd7"' : 'data-target="#xs-components-links-module-FooterModule-e38aedbde5bbbcea84426817f2a25a464985aedd1f98d60dec550a332276ec7dce17d26f3b045ba22eaefddbce04477f36c1a1e11c40044222e3f8bbaffbfcd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-e38aedbde5bbbcea84426817f2a25a464985aedd1f98d60dec550a332276ec7dce17d26f3b045ba22eaefddbce04477f36c1a1e11c40044222e3f8bbaffbfcd7"' :
                                            'id="xs-components-links-module-FooterModule-e38aedbde5bbbcea84426817f2a25a464985aedd1f98d60dec550a332276ec7dce17d26f3b045ba22eaefddbce04477f36c1a1e11c40044222e3f8bbaffbfcd7"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-f401c462da47f5ef94cf2a150a334e8b64100e122e71de4c9b3081b48b1bb1bcb03709a400f1f5377f586de5e393c7ab2f1b312bbdd6dc30836da3f1806aa56b"' : 'data-target="#xs-components-links-module-HeaderModule-f401c462da47f5ef94cf2a150a334e8b64100e122e71de4c9b3081b48b1bb1bcb03709a400f1f5377f586de5e393c7ab2f1b312bbdd6dc30836da3f1806aa56b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-f401c462da47f5ef94cf2a150a334e8b64100e122e71de4c9b3081b48b1bb1bcb03709a400f1f5377f586de5e393c7ab2f1b312bbdd6dc30836da3f1806aa56b"' :
                                            'id="xs-components-links-module-HeaderModule-f401c462da47f5ef94cf2a150a334e8b64100e122e71de4c9b3081b48b1bb1bcb03709a400f1f5377f586de5e393c7ab2f1b312bbdd6dc30836da3f1806aa56b"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-f63a9a5ced5ba7a006d2896bf03e6ea5683eda6e16da6c0cd2373f93e28eef8f966bd8f941dc83b0f7a2e6126e0b56af24475de7b73fd9a6558bfa112259413c"' : 'data-target="#xs-components-links-module-HomeModule-f63a9a5ced5ba7a006d2896bf03e6ea5683eda6e16da6c0cd2373f93e28eef8f966bd8f941dc83b0f7a2e6126e0b56af24475de7b73fd9a6558bfa112259413c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-f63a9a5ced5ba7a006d2896bf03e6ea5683eda6e16da6c0cd2373f93e28eef8f966bd8f941dc83b0f7a2e6126e0b56af24475de7b73fd9a6558bfa112259413c"' :
                                            'id="xs-components-links-module-HomeModule-f63a9a5ced5ba7a006d2896bf03e6ea5683eda6e16da6c0cd2373f93e28eef8f966bd8f941dc83b0f7a2e6126e0b56af24475de7b73fd9a6558bfa112259413c"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
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
                                            'data-target="#components-links-module-ListModule-248286b06b2dab4b31f85ea3adf904a7ec562b6d5f53b69056b5d28a092f9737163ad1a80913f82a514b63a728a92917b93d69ac9399b21121e09965dcc7a8ff"' : 'data-target="#xs-components-links-module-ListModule-248286b06b2dab4b31f85ea3adf904a7ec562b6d5f53b69056b5d28a092f9737163ad1a80913f82a514b63a728a92917b93d69ac9399b21121e09965dcc7a8ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListModule-248286b06b2dab4b31f85ea3adf904a7ec562b6d5f53b69056b5d28a092f9737163ad1a80913f82a514b63a728a92917b93d69ac9399b21121e09965dcc7a8ff"' :
                                            'id="xs-components-links-module-ListModule-248286b06b2dab4b31f85ea3adf904a7ec562b6d5f53b69056b5d28a092f9737163ad1a80913f82a514b63a728a92917b93d69ac9399b21121e09965dcc7a8ff"' }>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' : 'data-target="#xs-components-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' :
                                            'id="xs-components-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                            <li class="link">
                                                <a href="components/TodoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' : 'data-target="#xs-directives-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' :
                                        'id="xs-directives-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                        <li class="link">
                                            <a href="directives/DoNothingDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoNothingDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' : 'data-target="#xs-pipes-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' :
                                            'id="xs-pipes-links-module-TodoModule-18cfaec4703ed48b62d58ef40bf718c1372a3a4e69892b1f9e9efdaccfd809e3c9c07969db75daec207832e8fd04c97b6623c07afb94230d6c90e866cdce2f44"' }>
                                            <li class="link">
                                                <a href="pipes/FirstUpperPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstUpperPipe</a>
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