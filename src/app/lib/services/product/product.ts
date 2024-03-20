/* eslint-disable @typescript-eslint/naming-convention*/
export enum FertilizerType {
    phosphorus = 'fosforado',
    nitrogen = 'nitrogenado',
}

export interface Product {
    id: string;
    name?: string;
    binomialName?: string;
    price?: number;
    imgUrl?: string;
    wateringsPerWeek?: number;
    fertilizerType?: FertilizerType;
    heightInCm?: number;
}
