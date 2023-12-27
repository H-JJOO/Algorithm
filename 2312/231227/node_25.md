노드 25일차

9-26 카트비우기
9-27 주문 완료 페이지

- 카트비우기

orderContorller.js

Order.js 에서

orderSchema.post("save", async function () {
// 카트 비우기
const cart = await Cart.findOne({ userId: this.userId });
cart.items = [];
await cart.save();
})
