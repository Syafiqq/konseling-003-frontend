<template lang="pug">
  .dashboard.app.header-fixed.sidebar-fixed.aside-menu-fixed.sidebar-lg-show
    header.app-header.navbar
      button.navbar-toggler.sidebar-toggler.d-lg-none.mr-auto(type='button', data-toggle='sidebar-show')
        span.navbar-toggler-icon
      a.navbar-brand(href='javascript:void(0)')
        img.navbar-brand-full(src='about:blank', width='89', height='25', alt='CoreUI Logo')
        img.navbar-brand-minimized(src='about:blank', width='30', height='30', alt='CoreUI Logo')
      button.navbar-toggler.sidebar-toggler.d-md-down-none(type='button', data-toggle='sidebar-lg-show')
        span.navbar-toggler-icon
      ul.nav.navbar-nav.d-md-down-none
        li.nav-item.px-3
          a.nav-link(href='javascript:void(0)') Dashboard
        li.nav-item.px-3
          a.nav-link(href='javascript:void(0)') Users
        li.nav-item.px-3
          a.nav-link(href='javascript:void(0)') Settings
      ul.nav.navbar-nav.ml-auto
        li.nav-item.d-md-down-none
          a.nav-link(href='javascript:void(0)')
            i.icon-bell
            span.badge.badge-pill.badge-danger 5
        li.nav-item.d-md-down-none
          a.nav-link(href='javascript:void(0)')
            i.icon-list
        li.nav-item.d-md-down-none
          a.nav-link(href='javascript:void(0)')
            i.icon-location-pin
        li.nav-item.dropdown
          a.nav-link(data-toggle='dropdown', href='javascript:void(0)', role='button', aria-haspopup='true', aria-expanded='false')
            img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
          .dropdown-menu.dropdown-menu-right
            .dropdown-header.text-center
              strong Account
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-bell-o
              |  Updates
              span.badge.badge-info 42
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-envelope-o
              |  Messages
              span.badge.badge-success 42
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-tasks
              |  Tasks
              span.badge.badge-danger 42
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-comments
              |  Comments
              span.badge.badge-warning 42
            .dropdown-header.text-center
              strong Settings
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-user
              |  Profile
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-wrench
              |  Settings
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-usd
              |  Payments
              span.badge.badge-secondary 42
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-file
              |  Projects
              span.badge.badge-primary 42
            .dropdown-divider
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-shield
              |  Lock Account
            a.dropdown-item(href='javascript:void(0)')
              i.fa.fa-lock
              |  Logout
      button.navbar-toggler.aside-menu-toggler.d-md-down-none(type='button', data-toggle='aside-menu-lg-show')
        span.navbar-toggler-icon
      button.navbar-toggler.aside-menu-toggler.d-lg-none(type='button', data-toggle='aside-menu-show')
        span.navbar-toggler-icon
    .app-body
      .sidebar
        nav.sidebar-nav
          ul.nav
            li.nav-item
              a.nav-link(href='javascript:void(0)')
                i.nav-icon.icon-speedometer
                |  Dashboard
                span.badge.badge-primary NEW
            li.nav-title Theme
            li.nav-item
              a.nav-link(href='javascript:void(0)')
                i.nav-icon.icon-drop
                |  Colors
            li.nav-item
              a.nav-link(href='javascript:void(0)')
                i.nav-icon.icon-pencil
                |  Typography
            li.nav-title Components
            li.nav-item.nav-dropdown
              a.nav-link.nav-dropdown-toggle(href='javascript:void(0)')
                i.nav-icon.icon-puzzle
                |  Base
              ul.nav-dropdown-items
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Breadcrumb
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Cards
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Carousel
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Collapse
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Forms
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Jumbotron
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  List group
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Navs
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Pagination
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Popovers
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Progress
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Scrollspy
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Switches
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Tables
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Tabs
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-puzzle
                    |  Tooltips
            li.nav-item.nav-dropdown
              a.nav-link.nav-dropdown-toggle(href='javascript:void(0)')
                i.nav-icon.icon-cursor
                |  Buttons
              ul.nav-dropdown-items
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-cursor
                    |  Buttons
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-cursor
                    |  Buttons Group
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-cursor
                    |  Dropdowns
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-cursor
                    |  Brand Buttons
            li.nav-item
              a.nav-link(href='javascript:void(0)')
                i.nav-icon.icon-pie-chart
                |  Charts
            li.nav-item.nav-dropdown
              a.nav-link.nav-dropdown-toggle(href='javascript:void(0)')
                i.nav-icon.icon-star
                |  Icons
              ul.nav-dropdown-items
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-star
                    |  CoreUI Icons
                    span.badge.badge-success NEW
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-star
                    |  Flags
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-star
                    |  Font Awesome
                    span.badge.badge-secondary 4.7
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-star
                    |  Simple Line Icons
            li.nav-item.nav-dropdown
              a.nav-link.nav-dropdown-toggle(href='javascript:void(0)')
                i.nav-icon.icon-bell
                |  Notifications
              ul.nav-dropdown-items
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-bell
                    |  Alerts
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-bell
                    |  Badge
                li.nav-item
                  a.nav-link(href='javascript:void(0)')
                    i.nav-icon.icon-bell
                    |  Modals
            li.nav-item
              a.nav-link(href='javascript:void(0)')
                i.nav-icon.icon-calculator
                |  Widgets
                span.badge.badge-primary NEW
            li.divider
            li.nav-title Extras
            li.nav-item.nav-dropdown
              a.nav-link.nav-dropdown-toggle(href='javascript:void(0)')
                i.nav-icon.icon-star
                |  Pages
              ul.nav-dropdown-items
                li.nav-item
                  a.nav-link(href='javascript:void(0)', target='_top')
                    i.nav-icon.icon-star
                    |  Login
                li.nav-item
                  a.nav-link(href='javascript:void(0)', target='_top')
                    i.nav-icon.icon-star
                    |  Register
                li.nav-item
                  a.nav-link(href='javascript:void(0)', target='_top')
                    i.nav-icon.icon-star
                    |  Error 404
                li.nav-item
                  a.nav-link(href='javascript:void(0)', target='_top')
                    i.nav-icon.icon-star
                    |  Error 500
            li.nav-item.mt-auto
              a.nav-link.nav-link-success(href='javascript:void(0)', target='_top')
                i.nav-icon.icon-cloud-download
                |  Download CoreUI
            li.nav-item
              a.nav-link.nav-link-danger(href='javascript:void(0)', target='_top')
                i.nav-icon.icon-layers
                |  Try CoreUI
                strong PRO
        button.sidebar-minimizer.brand-minimizer(type='button')
      main.main
        // Breadcrumb
        ol.breadcrumb
          li.breadcrumb-item Home
          li.breadcrumb-item
            a(href='javascript:void(0)') Admin
          li.breadcrumb-item.active Dashboard
          // Breadcrumb Menu
          li.breadcrumb-menu.d-md-down-none
            .btn-group(role='group', aria-label='Button group')
              a.btn(href='javascript:void(0)')
                i.icon-speech
              a.btn(href='javascript:void(0)')
                i.icon-graph
                |  &nbsp;Dashboard
              a.btn(href='javascript:void(0)')
                i.icon-settings
                |  &nbsp;Settings
        .container-fluid
          .animated.fadeIn
      aside.aside-menu
        ul.nav.nav-tabs(role='tablist')
          li.nav-item
            a.nav-link.active(data-toggle='tab', href='javascript:void(0)', role='tab')
              i.icon-list
          li.nav-item
            a.nav-link(data-toggle='tab', href='javascript:void(0)', role='tab')
              i.icon-speech
          li.nav-item
            a.nav-link(data-toggle='tab', href='javascript:void(0)', role='tab')
              i.icon-settings
        // Tab panes
        .tab-content
          #timeline.tab-pane.active(role='tabpanel')
            .list-group.list-group-accent
              .list-group-item.list-group-item-accent-secondary.bg-light.text-center.font-weight-bold.text-muted.text-uppercase.small Today
              .list-group-item.list-group-item-accent-warning.list-group-item-divider
                .avatar.float-right
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                div
                  | Meeting with
                  strong Lucas
                small.text-muted.mr-3
                  i.icon-calendar
                  | &nbsp; 1 - 3pm
                small.text-muted
                  i.icon-location-pin
                  | &nbsp; Palo Alto, CA
              .list-group-item.list-group-item-accent-info
                .avatar.float-right
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                div
                  | Skype with
                  strong Megan
                small.text-muted.mr-3
                  i.icon-calendar
                  | &nbsp; 4 - 5pm
                small.text-muted
                  i.icon-social-skype
                  | &nbsp; On-line
              .list-group-item.list-group-item-accent-secondary.bg-light.text-center.font-weight-bold.text-muted.text-uppercase.small Tomorrow
              .list-group-item.list-group-item-accent-danger.list-group-item-divider
                div
                  | New UI Project -
                  strong deadline
                small.text-muted.mr-3
                  i.icon-calendar
                  | &nbsp; 10 - 11pm
                small.text-muted
                  i.icon-home
                  | &nbsp; creativeLabs HQ
                .avatars-stack.mt-2
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
              .list-group-item.list-group-item-accent-success.list-group-item-divider
                div
                  strong #10 Startups.Garden
                  |  Meetup
                small.text-muted.mr-3
                  i.icon-calendar
                  | &nbsp; 1 - 3pm
                small.text-muted
                  i.icon-location-pin
                  | &nbsp; Palo Alto, CA
              .list-group-item.list-group-item-accent-primary.list-group-item-divider
                div
                  strong Team meeting
                small.text-muted.mr-3
                  i.icon-calendar
                  | &nbsp; 4 - 6pm
                small.text-muted
                  i.icon-home
                  | &nbsp; creativeLabs HQ
                .avatars-stack.mt-2
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  .avatar.avatar-xs
                    img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
          #messages.tab-pane.p-3(role='tabpanel')
            .message
              .py-3.pb-5.mr-3.float-left
                .avatar
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  span.avatar-status.badge-success
              div
                small.text-muted Lukasz Holeczek
                small.text-muted.float-right.mt-1 1:52 PM
              .text-truncate.font-weight-bold Lorem ipsum dolor sit amet
              small.text-muted
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            hr
            .message
              .py-3.pb-5.mr-3.float-left
                .avatar
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  span.avatar-status.badge-success
              div
                small.text-muted Lukasz Holeczek
                small.text-muted.float-right.mt-1 1:52 PM
              .text-truncate.font-weight-bold Lorem ipsum dolor sit amet
              small.text-muted
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            hr
            .message
              .py-3.pb-5.mr-3.float-left
                .avatar
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  span.avatar-status.badge-success
              div
                small.text-muted Lukasz Holeczek
                small.text-muted.float-right.mt-1 1:52 PM
              .text-truncate.font-weight-bold Lorem ipsum dolor sit amet
              small.text-muted
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            hr
            .message
              .py-3.pb-5.mr-3.float-left
                .avatar
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  span.avatar-status.badge-success
              div
                small.text-muted Lukasz Holeczek
                small.text-muted.float-right.mt-1 1:52 PM
              .text-truncate.font-weight-bold Lorem ipsum dolor sit amet
              small.text-muted
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
            hr
            .message
              .py-3.pb-5.mr-3.float-left
                .avatar
                  img.img-avatar(src='about:blank', alt='admin@bootstrapmaster.com')
                  span.avatar-status.badge-success
              div
                small.text-muted Lukasz Holeczek
                small.text-muted.float-right.mt-1 1:52 PM
              .text-truncate.font-weight-bold Lorem ipsum dolor sit amet
              small.text-muted
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
          #settings.tab-pane.p-3(role='tabpanel')
            h6 Settings
            .aside-options
              .clearfix.mt-4
                small
                  b Option 1
                label.switch.switch-label.switch-pill.switch-success.switch-sm.float-right
                  input.switch-input(type='checkbox', checked='')
                  span.switch-slider(data-checked='On', data-unchecked='Off')
              div
                small.text-muted
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            .aside-options
              .clearfix.mt-3
                small
                  b Option 2
                label.switch.switch-label.switch-pill.switch-success.switch-sm.float-right
                  input.switch-input(type='checkbox')
                  span.switch-slider(data-checked='On', data-unchecked='Off')
              div
                small.text-muted
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            .aside-options
              .clearfix.mt-3
                small
                  b Option 3
                label.switch.switch-label.switch-pill.switch-success.switch-sm.float-right
                  input.switch-input(type='checkbox')
                  span.switch-slider(data-checked='On', data-unchecked='Off')
            .aside-options
              .clearfix.mt-3
                small
                  b Option 4
                label.switch.switch-label.switch-pill.switch-success.switch-sm.float-right
                  input.switch-input(type='checkbox', checked='')
                  span.switch-slider(data-checked='On', data-unchecked='Off')
            hr
            h6 System Utilization
            .text-uppercase.mb-1.mt-4
              small
                b CPU Usage
            .progress.progress-xs
              .progress-bar.bg-info(role='progressbar', style='width: 25%', aria-valuenow='25', aria-valuemin='0', aria-valuemax='100')
            small.text-muted 348 Processes. 1/4 Cores.
            .text-uppercase.mb-1.mt-2
              small
                b Memory Usage
            .progress.progress-xs
              .progress-bar.bg-warning(role='progressbar', style='width: 70%', aria-valuenow='70', aria-valuemin='0', aria-valuemax='100')
            small.text-muted 11444GB/16384MB
            .text-uppercase.mb-1.mt-2
              small
                b SSD 1 Usage
            .progress.progress-xs
              .progress-bar.bg-danger(role='progressbar', style='width: 95%', aria-valuenow='95', aria-valuemin='0', aria-valuemax='100')
            small.text-muted 243GB/256GB
            .text-uppercase.mb-1.mt-2
              small
                b SSD 2 Usage
            .progress.progress-xs
              .progress-bar.bg-success(role='progressbar', style='width: 10%', aria-valuenow='10', aria-valuemin='0', aria-valuemax='100')
            small.text-muted 25GB/256GB
    footer.app-footer
      div
        a(href='javascript:void(0)') CoreUI
        span &copy; 2018 creativeLabs.
      .ml-auto
        span Powered by
        a(href='javascript:void(0)') CoreUI
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>

</style>
