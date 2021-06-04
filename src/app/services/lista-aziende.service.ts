import { Injectable } from '@angular/core';
import { Agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class ListaAziendeService {

  constructor() { }

  agency:  Agency[]=[
    {name: 'LowSrl', subtitle: 'free Agency Flop', description: 'Mauris eu auctor metus. Quisque pulvinar arcu purus, eu bibendum nisl tempor non. Vivamus id velit interdum, pharetra nisi eget, sagittis lacus. Quisque et ligula non leo sagittis mattis et id nisi.', yearofDeploy: 2011, imglink:1},
    {name: 'FreeSrl', subtitle: 'low Agency Peer', description: 'Cras rhoncus, purus in porttitor efficitur, nibh lorem consectetur tellus, id blandit massa tortor eu nisi. Cras consequat sa', yearofDeploy: 2001, imglink:2},
    {name: 'Flow-Charts', subtitle: 'Free Peer', description: 'ugue vel blandit lobortis, urna est imperdiet sem, vitae bibendum metus sem eu erat. Nunc vitae purus id ipsum sollicitudin dapibus ut eget diam', yearofDeploy: 2006, imglink:3},
  ]

  

}
