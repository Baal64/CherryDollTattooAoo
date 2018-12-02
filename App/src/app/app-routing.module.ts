import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { Erreur404Component }   from './erreur404/erreur404.component';
import { ParametresComponent }  from './parametres/parametres.component';
import { AuthGuard }            from './auth.guard';
import { SuiviProjetComponent } from './projet/suivi-projet/suivi-projet.component';
import { StocksComponent }      from './stocks/stocks.component';
import { NouveauProjetComponent }        from './projet/nouveau-projet/nouveau-projet.component';
import { InformationsComponent }         from './projet/informations/informations.component';
import { IdentificationClientComponent } from './client/identification-client/identification-client.component';
import { SanteComponent }                from './projet/sante/sante.component';
import { ConsentementMutuelComponent }   from './projet/consentement-mutuel/consentement-mutuel.component';
import { InformationsSoinsComponent }    from './projet/informations-soins/informations-soins.component';
import { DevisComponent }                from './projet/devis/devis.component';
import { TracabiliteComponent }          from './projet/tracabilite/tracabilite.component';
import { ListeClientsComponent }         from './client/liste-clients/liste-clients.component';
import { ListeTotaleClientsComponent }   from './client/liste-totale-clients/liste-totale-clients.component';
import { ProjetEnCoursListeComponent }   from './projet/projet-en-cours-liste/projet-en-cours-liste.component';
import { ProjetsEnCoursComponent }       from './projet/projets-en-cours/projets-en-cours.component';
import { SuppressionClientComponent }    from './client/suppression-client/suppression-client.component';
import { ModificationClientComponent }   from './client/modification-client/modification-client.component';

const routes: Routes = [
  { path: ''            , component: LoginComponent },
  { path: 'suivi-projet', component: SuiviProjetComponent , canActivate: [AuthGuard] },
  { path: 'stocks'      , component: StocksComponent      , canActivate: [AuthGuard] },
  { path: 'parametres'  , component: ParametresComponent  , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet'                      , component: NouveauProjetComponent        , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/identification-client', component: IdentificationClientComponent , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/informations'         , component: InformationsComponent         , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/sante'                , component: SanteComponent                , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/consentement'         , component: ConsentementMutuelComponent   , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/informations-soins'   , component: InformationsSoinsComponent    , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/devis'                , component: DevisComponent                , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/tracabilite'          , component: TracabiliteComponent          , canActivate: [AuthGuard] },
  { path: 'suivi-projet/liste-clients'                       , component: ListeClientsComponent         , canActivate: [AuthGuard] },
  { path: 'suivi-projet/projets-en-cours'                    , component: ProjetsEnCoursComponent       , canActivate: [AuthGuard] },
  { path: 'suivi-projet/nouveau-projet/liste'                , component: ProjetEnCoursListeComponent   , canActivate: [AuthGuard] },
  { path: 'suivi-projet/liste-totale-clients'                , component: ListeTotaleClientsComponent   , canActivate: [AuthGuard] },
  { path: 'suivi-projet/liste-clients/suppression'           , component: SuppressionClientComponent    , canActivate: [AuthGuard] },
  { path: 'suivi-projet/liste-clients/modification'          , component: ModificationClientComponent   , canActivate: [AuthGuard] },
  { path: '**'          , component: Erreur404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
