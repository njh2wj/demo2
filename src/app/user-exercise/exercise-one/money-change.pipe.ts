import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
    name: 'moneyChange'
})
export class MoneyChangePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        // console.log(value);
        const arr1 = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        const arr2 = ['', '什', '佰'];
        const arr3 = ['角', '分'];
        const str = '元';
        const str2 = '整';
        const maxNum = 999.99;
        let integerNum;   // 整数
        let decimalNum;   // 小数
        let chnStr = '';
        let partsArr;
        if (value > maxNum) {
            return;
        }
        if (value === 0) {
            chnStr = arr1[0] + str;
            return chnStr;
        }
        if (isNullOrUndefined(value)) {
            return;
        }
        value = value.toString();
        if (value.indexOf('.') === -1) {
            integerNum = value;
            decimalNum = '';
        } else {
            partsArr = value.split('.');
            integerNum = partsArr[0]; // 数组第一个元素为整数
            decimalNum = partsArr[1].substring(0, 4);
        }
        if (parseInt(integerNum, 10) > 0) {
            let zeroCount = 0;
            for (let i = 0; i < integerNum.length; i++) {
                const n = integerNum.substr(i, 1);
                const p = integerNum.length - i - 1;
                const m = p % 4;
                if (n === '0') {
                    zeroCount++;
                } else {
                    if (zeroCount > 0) {
                        chnStr += arr1[0];
                    }
                    zeroCount = 0;
                    chnStr += arr1[parseInt(n, null)] + arr2[m];
                }
            }
            chnStr += str;
        }
        if (decimalNum !== '') {
            const decLen = decimalNum.length;
            for (let i = 0; i < decLen; i++) {
                const n = decimalNum.substr(i, 1);
                if (n !== '0') {
                    chnStr += arr1[Number(n)] + arr3[i];
                }
            }
        }
        if (chnStr === '') {
            chnStr += arr1[0] + str + str2;
        } else if (decimalNum === '') {
            chnStr += str2;
        }
        return chnStr;
    }
}
