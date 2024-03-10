REF: https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular/

# Setup Shell Project

### 01 Generate Project
```bash
ng new mfe-shell --create-application=false
``` 

### 02 Create application
```bash
ng g application mfe-shell
ng g application mfe-dashboard
```

### 03 Add Module Federation

Add @angular-architects/module-federation
```bash
ng add @angular-architects/module-federation@14 --project mfe-shell --port 4200 --type host
ng add @angular-architects/module-federation@14 --project mfe-another-feature --port 4201 --type remote
```

Alternative
```bash
npm i @angular-architects/module-federation@14 -D

ng g @angular-architects/module-federation:init --project mfe-shell --port 4200 --type host
ng g @angular-architects/module-federation:init --project mfe-dashboard --port 4201 --type remote
```

### 04. generate library
```bash
ng g library sdk
ng g library cdk
```