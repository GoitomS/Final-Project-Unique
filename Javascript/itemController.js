class ItemsController {
    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
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
    setLocalStorage() {
        localStorage.setItem("item", JSON.stringify(this.items));
        localStorage.setItem("currentID", JSON.stringify(this.currentId));
    }

    loadLocalStorage() {
        this.items = JSON.parse(this.localStorage.getItem("item"))
        this.currentId =<h1 class="display-6">Payment</h1>
        <h6>Choose payment method</h6><h1 class="display-6">Payment</h1>
        <h6>Choose payment method</h6><h1 class="display-6">Payment</h1>
        <h6>Choose payment method</h6><h1 class="display-6">Payment</h1>
        <h6>Choose payment method</h6><h1 class="display-6">Payment</h1>
        <h6>Choose payment method</h6>
    }
}
