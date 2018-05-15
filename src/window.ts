import {mean} from 'lodash';

export class TypedWindow<T> {
    window: Array<T>;

    constructor(private size: number, private minSize: number) {
        this.window = [];
    }

    add(value: T): void {
        this.window.push(value);
        if(this.window.length > this.size)
            this.window.shift();
    }

    mean(): number {
        if(this.window.length < this.minSize) {
            return -1;
        } else {
            return mean(this.window);
        }
    }
}