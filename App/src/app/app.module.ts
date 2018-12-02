// Imported modules

import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { HttpClientModule }          from '@angular/common/http';
import { CommonModule }              from '@angular/common';
import { RouterModule, Routes }      from '@angular/router';
import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastrModule }              from 'ngx-toastr';
import { FormsModule,
         ReactiveFormsModule }       from '@angular/forms';

//Created modules

        // Layout modules
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

        // Error modules
import { Erreur404Component } from './erreur404/erreur404.component';

        // Log and auth modules
import { AuthService }    from './services/auth.service';
import { LoginComponent } from './login/login.component';

        // Customers modules
import { ClientService }               from './services/client.service';
import { ListeClientsComponent }       from './client/liste-clients/liste-clients.component';
import { ListeTotaleClientsComponent } from './client/liste-totale-clients/liste-totale-clients.component';
import { SuppressionClientComponent }  from './client/suppression-client/suppression-client.component';
import { ModificationClientComponent } from './client/modification-client/modification-client.component';

        // Projects modules
import { SuiviProjetComponent }          from './projet/suivi-projet/suivi-projet.component';
import { NouveauProjetComponent }        from './projet/nouveau-projet/nouveau-projet.component';
import { ProjetEnCoursListeComponent }   from './projet/projet-en-cours-liste/projet-en-cours-liste.component';
import { ProjetsEnCoursComponent }       from './projet/projets-en-cours/projets-en-cours.component';
import { InformationsComponent }         from './projet/informations/informations.component';
import { TracabiliteComponent }          from './projet/tracabilite/tracabilite.component';
import { IdentificationClientComponent } from './client/identification-client/identification-client.component';
import { InformationsSoinsComponent }    from './projet/informations-soins/informations-soins.component';
import { DevisComponent }                from './projet/devis/devis.component';
import { SanteComponent }                from './projet/sante/sante.component';
import { ConsentementMutuelComponent }   from './projet/consentement-mutuel/consentement-mutuel.component';

        // Parameters modules
import { ParametresComponent } from './parametres/parametres.component';

        // Stocks modules
import { StocksComponent } from './stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    Erreur404Component,
    FooterComponent,
    ParametresComponent,
    SuiviProjetComponent,
    StocksComponent,
    NouveauProjetComponent,
    InformationsComponent,
    IdentificationClientComponent,
    SanteComponent,
    ConsentementMutuelComponent,
    InformationsSoinsComponent,
    DevisComponent,
    TracabiliteComponent,
    ListeClientsComponent,
    ListeTotaleClientsComponent,
    ProjetEnCoursListeComponent,
    ProjetsEnCoursComponent,
    SuppressionClientComponent,
    ModificationClientComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],

  providers: [
    AuthService,
    ClientService,
    
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
