import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable  {
    data: number[];
    length: number;

    constructor (data: number[], length: number) {
        this.data = data
        this.length = length
    }

    compare(leftPos: number, rightPos: number): boolean{
        if (this.data[leftPos] > this.data[rightPos]) {
            return false;
        } else {
            return true;
        }
    }
    swap(leftPos: number, rightPos: number): void {
        const tempLeft = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = tempLeft;
    }

    getLength(): number { 
        return this.length
    }
    // logic };
 }
