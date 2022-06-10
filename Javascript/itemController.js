class ItemsController {
    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
    } 
    addItem(name, category, subCategory, price, description, picture){
        const item = {
            id: this.currentId++,
            name: name,
            category: category,
            subCategory: subCategory,
            price: price,
            description: description,
            picture: picture
        }
        this.items.push(item);
    }
}