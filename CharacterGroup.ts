import { ISortable } from "./ISortable";
export class CharacterGroup implements ISortable {
    data: string;
    length: number;

    constructor(data: string, length: number) {
        this.data = data
        this.length = length

    }


    compare(leftPos: number, rightPos: number): boolean {
        if (this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase()) {
            return true
        } else {
            return false
        }
        
      }
    swap(leftPos: number, rightPos: number): void {
        const array = Array.from(this.data);
        const newPos = array[leftPos];
        array[leftPos] = array[rightPos];
        array[rightPos] = newPos;
        this.data = array.join("");
    }

    getLength(): number {
        return this.length
    }
}