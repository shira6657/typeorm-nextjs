import {
    Entity,
} from 'typeorm';
import { Links } from './abstract/Links';

@Entity({ schema: 'dbo', name: "Links_il" })
export class LinksIl extends Links {

}
