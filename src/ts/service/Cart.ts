import Buyable from '../domain/Buyable';

export default class Cart {
    public _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get allSumPrice(): number {
        return this._items.reduce((sum: number, current: Buyable) => sum + current.price, 0)
    }

    allSumPriceProc(percent: number): number {
        return this.allSumPrice - (this.allSumPrice * percent/100)
    }

    dellObject(idNumber : number): void {

        this._items.forEach((obj: Buyable, index: number): void => {
            if(obj.id === idNumber) {
                this._items.splice(index, 1)
            }
        });
    }

    get items(): Buyable[] {
        return [...this._items];
    }
}