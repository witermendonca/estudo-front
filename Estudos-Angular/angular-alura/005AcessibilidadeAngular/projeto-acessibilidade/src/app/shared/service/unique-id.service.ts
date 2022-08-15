import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

public generatedUniqueIdWithPrefix(prefix: string){
  const uniqueId = this.generateUniqueId();
  return `${prefix}-${uniqueId}`;
}

private generateUniqueId(){
  return uuid.v1();
}
  constructor() { }
}
