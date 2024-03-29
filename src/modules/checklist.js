export default class Checklist {
    constructor(items = []) {
        this.items = items.map(item => ({ description: item, checked:false})); ;
    }

    addItem(description) {
        const newItem = { description, checked: false };
        this.items.push(newItem);
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    toggleItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].checked = !this.items[index].checked;
        }
    }
}
