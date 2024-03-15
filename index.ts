import { ISortable } from "./ISortable";
import { CharacterGroup }  from "./CharacterGroup"
import { NumberGroup } from "./NumberGroup";
import { LinkedListGroup } from "./LinkedList";

export class SortUtil {
    collection: ISortable;

    constructor(collection: ISortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;
        let isSorted = false;
        let lastUnsorted = length - 1;
        while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < lastUnsorted; i++) {
                if (!this.collection.compare(i, i + 1)) {
                    this.collection.swap(i, i + 1);
                    isSorted = false;
                }
            }
            lastUnsorted--;
        }
    }
}


const linkedList = new LinkedListGroup();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);


const sortUtil = new SortUtil(linkedList);
sortUtil.sort();
linkedList.print();