class ItemsController {
    constructor(){
        this.items = localitems;
        this.currentId = localId + 1;
    } 
    addItem(name, category, subCategory, price, description, picture){
        const newItem = {
            id: this.currentId++,
            name: name,
            category: category,
            subCategory: subCategory,
            price: price,
            description: description,
            picture: picture
        }
        this.items.push(newItem);
    }

    setitems(localitems){
        this.items = localitems
        }
    }
let localitems = []
let localId;
if(localStorage.getItem('product')) {
    localitems = JSON.parse(localStorage.getItem('product'))
    localId = localitems[localitems.length - 1].id
} else {
    localId = 0
}
