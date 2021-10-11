export const asCurrency = function (price, currency) {
    let curr = String(price.toFixed(2));
    let symb;

    switch (currency) {
        case 'EUR':
            symb = '€';

            break;

        case 'USD':
            symb = '$';

            break;

        case 'GBP':
            symb = '£';

            break;

        case 'JPY':
            symb = '¥';

            break;

        case 'CNY':
            symb = '¥';

            break;

        default:
            symb = '$';

            break;
    }

    return curr.replace('.', ',') + symb;
};