import { cartBtnHandler } from "./core/handler";
import { cartBar, closeBtn, openBtn } from "./core/selector";

class Shop {

    listener(){
        // cartBar.addEventListener("click", cartBtnHandler)
        closeBtn.addEventListener("click", cartBtnHandler)
    }
    
    init(){
        this.listener();
    }
}

export default Shop;