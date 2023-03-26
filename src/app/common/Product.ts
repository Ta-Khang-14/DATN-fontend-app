import { BaseClass } from './BaseClass';

export class Product extends BaseClass {
  ProductCode: string | undefined;
  ProductName: string | undefined;
  Description: string | undefined;
  QuickDescrition: string | undefined;
  Price: number | undefined;
  Vote: number | undefined;
  IsPromotion: boolean | undefined;
}
