import { Home } from '../../pages/home/home';
import { TopBanner } from '../../customComponents/topBanner';
import { Type } from '@angular/core';

export const hotelDeclarations: (any[] | Type<any>)[] = [
    Home,
    TopBanner
]
export const bootstrapComponent =  Home