import { cartBtnHandler, closeCartBtnHandler } from "./core/handler";
import { cartBar, exitBtn, openBtn } from "./core/selector";

class Shop {

    listener() {
        openBtn.addEventListener("click", cartBtnHandler)
        exitBtn.addEventListener("click", closeCartBtnHandler)
    }

    init() {
        this.listener();
    }
}

export default Shop;