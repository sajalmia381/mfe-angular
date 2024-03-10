import { ModuleWithProviders, NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { LayoutComponent, LayoutModule } from "./layout";

type RoutingOption = {
  basePath: '';
  canActivate?: any;
  options?: ExtraOptions;
  routes?: Routes;
}

@NgModule({
  imports: [LayoutModule]
})
export class SdkModule {
  static appShellForRoot(
    shellOptions: {
      // navigation?: {
      //   initial?: Partial<MenuItem>[];
      //   display?: 'top' | 'left' | 'right' | 'all' | 'none' | '';
      //   settings?: Partial<ISidebarOptions>;
      // }[];
      childRoute?: boolean;
    },
    routes: Routes,
    routingOptions: RoutingOption = {
      basePath: '',
      canActivate: undefined,
      options: {},
    }
  ): ModuleWithProviders<RouterModule> {
    if (!shellOptions.childRoute) return RouterModule.forRoot(routes, routingOptions.options);
    console.log('Layout Route');
    
    const providers: any[] = [];
    const _routes = [
      {
        path: routingOptions.basePath,
        component: LayoutComponent,
        canActivate: routingOptions.canActivate,
        children: routes,
        providers: providers,
      },
    ];
    return RouterModule.forChild(_routes)
  }
}