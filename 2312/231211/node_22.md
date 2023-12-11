노드 22일차

9-22 카트페이지 BE
9-23 카트페이지 FE

BE router -> contoroller

FE action -> reducer

파풀레이트?

.populate

const cart = await Cart.findOne({ userId })

=>

const cart = await Cart.findOne({ userId }).populate({
  path: "items",
  populate: {
    path: "productId",
    model: "Product",
    },
}); // populate 를 통해 items 에 있는 productId 를 실제 상품정보로 바꿔준다.

과제1.카트 아이템 삭제하기
1.아이템에 있는 삭제 버튼을 누르면 아이템이 삭제된다.



과제2.아이템 개수 수정하기
Quantity에서 개수를 선택하면 아이템 개수가 업데이트 되고 그에 따라서 Total 가격도 업데이트가 될 수 있도록 만들어 봅시다.

1.아이템 개수를 클릭한다
2.Total에 가격이 바뀐다.
3.옆에 주문내역에서의 가격도 바뀐다.
4.다시 카트페이지를 들어와도 내가 선택한 아이템 개수로 세팅이 되어있다.

과제3. 카트에 들어간 아이템 개수 상단 메뉴에 보여주기

유저가 로그인이 된 상태면 언제든지 카트에 아이템 개수를 상단에서 볼 수 있어야한다!
물론 카트 아이템 개수가 바뀌면 상단 숫자도 같이 업데이트가 되어야 한다.

정답:https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/HkP4v_H53