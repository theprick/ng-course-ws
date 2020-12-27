import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthorsComponent } from './section4/authors/authors.component';
import { CoursesComponent } from './section4/courses.component';
import { SynopsisComponent } from './section4/synopsis/synopsis.component';
import { FavoriteSVGComponent } from './section4/favorite-svg.component';
import { FavoriteComponent } from './section4/favorite/favorite.component';
import { TitlecaseComponent } from './section4/titlecase/titlecase.component';
import { LikeComponent } from './section5/like/like.component';
import { PanelComponent } from './section5/panel/panel.component';
import { Panel2Component } from './section5/panel2/panel2.component';
import { TreesComponent } from './section6/trees/trees.component';
import { UpdatableTreesComponent } from './section6/updatable-trees/updatable-trees.component';
import { ZippyComponent } from './section6/zippy/zippy.component';
import { ChangePasswdFormComponent } from './section8/change-passwd-form/change-passwd-form.component';
import { ContactFormComponent } from './section8/contact-form/contact-form.component';
import { CourseFormComponent } from './section8/course-form/course-form.component';
import { LoginFormComponent } from './section8/login-form/login-form.component';
import { NewCourseFormComponent } from './section8/new-course-form/new-course-form.component';
import { SignupFormComponent } from './section8/signup-form/signup-form.component';
import { FollowersComponent } from './section10/followers/followers.component';
import { PostsComponent } from './section10/posts/posts.component';
import { GithubProfileComponent } from './section10/github-profile/github-profile.component';
import { NavbarComponent } from './section10/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SynopsisPipe } from './section4/synopsis/synopsis.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './section4/author.service';
import { TitleCasePipe } from './section4/titlecase/titlecase.pipe';
import { LikeContainerComponent } from './section5/like-container/like-container.component';
import { PanelContainerComponent } from './section5/panel-container/panel-container.component';
import { LikesWatcherComponent } from './section5/likes-watcher/likes-watcher.component';
import { ZippyContainerComponent } from './section6/zippy-container/zippy-container.component';
import { InputFormatDirective } from './section6/input-format.directive';
import { CoursesListComponent } from './section6/courses-list/courses-list.component';
import { HideComponent } from './section6/hide/hide.component';
import { TabsViewComponent } from './section6/tabs-view/tabs-view.component';
import { CoursesTableComponent } from './section6/courses-table/courses-table.component';
import { BlogArchiveContainerComponent } from './section10/blog-container/blog-container.component';
import { BlogArchivesComponent } from './section10/blog-archives/blog-archives.component';
import { FolContainerComponent } from './section10/fol-container/fol-container.component';
import { BlogArchiveViewComponent } from './section10/blog-view/blog-view.component';
import { FollowersService } from './common/services/followers.service';
import { PostService } from './common/services/post.service';
import { AppErrorHandler } from './common/handlers/error.handler';
import { ErrorHandlingDemo } from './section10/error-handling/error-handling-demo.component';
import { MockService } from './common/services/mock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgMaterialComponent } from './section15/demo-ng-material/demo-ng-material.component';
import { DemoNgCheckboxComponent } from './section15/demo-ng-checkbox/demo-ng-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DemoNgRadiobuttonComponent } from './section15/demo-ng-radiobutton/demo-ng-radiobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NotFoundComponent,
    // section 4
    AuthorsComponent,
    CoursesComponent,
    SynopsisComponent,
    SynopsisPipe,
    FavoriteSVGComponent,
    FavoriteComponent,
    TitlecaseComponent,
    TitleCasePipe,
    // section 5
    LikeComponent,
    LikesWatcherComponent,
    LikeContainerComponent,
    PanelComponent,
    Panel2Component,
    PanelContainerComponent,
    // section 6
    HideComponent,
    CoursesListComponent,
    TabsViewComponent,
    CoursesTableComponent,
    TreesComponent,
    UpdatableTreesComponent,
    ZippyComponent,
    ZippyContainerComponent,
    InputFormatDirective,
    // section 8
    ChangePasswdFormComponent,
    ContactFormComponent,
    CourseFormComponent,
    LoginFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    // section 10
    FolContainerComponent,
    FollowersComponent,
    PostsComponent,
    GithubProfileComponent,
    NavbarComponent,
    BlogArchiveContainerComponent,
    BlogArchivesComponent,
    BlogArchiveViewComponent,
    ErrorHandlingDemo,
    // section 15
    DemoNgMaterialComponent,
    DemoNgCheckboxComponent,
    DemoNgRadiobuttonComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'section4',
        children: [
          {
            path: 'authors',
            component: AuthorsComponent
          },
          {
            path: 'favorite',
            component: FavoriteComponent
          },
          {
            path: 'synopsis',
            component: SynopsisComponent
          },
          {
            path: 'titlecase',
            component: TitlecaseComponent
          },
          {
            path: 'courses',
            component: CoursesComponent
          },
          {
            path: 'favoritesvg',
            component: FavoriteSVGComponent
          },
        ]
      },
      {
        path: 'section5',
        children: [
          {
            path: 'like',
            component: LikeContainerComponent,
          },
          {
            path: 'panel',
            component: PanelContainerComponent,
          },
        ]
      },
      {
        path: 'section6',
        children: [
          {
            path: 'courseslist',
            component: CoursesListComponent,
          },
          {
            path: 'hide',
            component: HideComponent,
          },
          {
            path: 'tabsview',
            component: TabsViewComponent,
          },
          {
            path: 'coursestable',
            component: CoursesTableComponent,
          },
          {
            path: 'trees',
            component: TreesComponent,
          },
          {
            path: 'updtrees',
            component: UpdatableTreesComponent,
          },
          {
            path: 'zippy',
            component: ZippyContainerComponent,
          },
        ]
      },
      {
        path: 'section8',
        children: [
          {
            path: 'changepasswdform',
            component: ChangePasswdFormComponent,
          },
          {
            path: 'contactform',
            component: ContactFormComponent,
          },
          {
            path: 'courseform',
            component: CourseFormComponent,
          },
          {
            path: 'loginform',
            component: LoginFormComponent,
          },
          {
            path: 'newcourseform',
            component: NewCourseFormComponent,
          },
          {
            path: 'signupform',
            component: SignupFormComponent,
          },
        ]
      },
      {
        path: 'section10',
        children: [
          {
            path: '',
            component: FolContainerComponent,
            children: [
              {
                path: 'followers/:username/:id',
                component: GithubProfileComponent,
              },
              {
                path: 'followers',
                component: FollowersComponent,
              },
              {
                path: 'posts',
                component: PostsComponent,
              }
            ]
          },
          {
            path: 'blogs',
            component: BlogArchiveContainerComponent
          },
          {
            path: 'blogs/:year/:month',
            component: BlogArchiveViewComponent,
          },
          {
            path: 'errors',
            component: ErrorHandlingDemo
          }
        ]
      },
      {
        path: 'section15',
        children: [
          {
            path: 'ngcheckbox',
            component: DemoNgCheckboxComponent
          }
        ]
      },
      //this should always be the last one
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]),
  ],
  providers: [
    AuthorService,
    TitleCasePipe,
    FollowersService,
    PostService,
    // For creating a mock back-end. You don't need these in a real app.
    MockService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
