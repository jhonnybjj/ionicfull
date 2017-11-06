import { Component } from '@angular/core';

import { ListingPage } from '../listing/listing';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { PagBusca } from '../busca/busca';
import { PagPost } from '../post/post';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = ListingPage;
    this.tab2Root = PagBusca;
    this.tab3Root = PagPost;
    this.tab4Root = NotificationsPage;
    this.tab5Root = ProfilePage;
  }
}
