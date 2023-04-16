import OrderCards from "@/hoc/cards/OrderCards"
import { orderHistory } from "@/store/staticStore"

const Orders = () => {
  return (
    <>
      <div className="heading-container">
        <p>Orders History</p>
        <p>Showing 1 - 3 of 3 results</p>
      </div>
      <div className="min-body-section-container">
        {orderHistory.map((order, index) => <OrderCards key={"order__" + index} data={order} />)}
      </div>
    </>
  )
}

export default Orders