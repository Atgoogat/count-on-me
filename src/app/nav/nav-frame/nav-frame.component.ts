import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay, take } from 'rxjs/operators'
import { MatIcon } from '@angular/material/icon'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'

interface NavLink {
  href: string
  outside?: boolean
  icon: string
  title: string
}

@Component({
  selector: 'app-nav-frame',
  templateUrl: './nav-frame.component.html',
  styleUrls: ['./nav-frame.component.css'],
})
export class NavFrameComponent {
  readonly appName = environment.appName

  readonly links: NavLink[] = [
    {
      href: '/',
      icon: 'home',
      title: 'Home',
    },
    {
      href: '/bookmark/new',
      icon: 'book',
      title: 'New Bookmark',
    },
    {
      href: 'https://github.com/Atgoogat/count-on-me',
      outside: true,
      icon: 'forum',
      title: 'Fork me on Github',
    },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly router: Router
  ) {}

  navigateAndCloseDrawer(link: NavLink, drawer: { close: () => {} }) {
    if (link.outside) {
      window.location.href = link.href
      return
    }

    this.router.navigateByUrl(link.href)
    this.isHandset$.pipe(take(1)).subscribe(isHandset => {
      if (isHandset) {
        drawer.close()
      }
    })
  }
}
