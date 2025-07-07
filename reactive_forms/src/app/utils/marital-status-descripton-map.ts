import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptonMap: { [key in MaritalStatusEnum]: string } = {
    [MaritalStatusEnum.SINGLE]: 'Solteiro',
    [MaritalStatusEnum.MARRIED]: 'Casado',
    [MaritalStatusEnum.DIVORCED]: 'Divorciado',
};

export const maritalStatusArray = Object.keys(maritalStatusDescriptonMap).map(Number).map((key) => {
    return { code: key, description: maritalStatusDescriptonMap[key as MaritalStatusEnum], };
});
