import { cartBar } from "./selector";

export const cartBtnHandler = () => {
    // console.log("cartBar");
    cartBar.classList.toggle("translate-x-full")
    !cartBar.classList.toggle("duration-300") && cartBar.classList.toggle("duration-300");
}

export const closeCartBtnHandler = () => {
    cartBar.classList.toggle("translate-x-full")
}
