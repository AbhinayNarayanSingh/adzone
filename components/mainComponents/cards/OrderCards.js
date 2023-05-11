import { ADS_CREDIT, MEMBERSHIP } from "@/Environment";
import Icon from "@/componentWrapper/image/Icon";

const OrderCards = ({ key, data }) => {
  const {
    type,
    plan,
    Ads,
    amount,
    tenure,
    currency,
    timeStamp,
    billingAddress,
    order_id,
  } = data;

  let order_img;
  switch (type) {
    case "MEMBERSHIP SUBSCRIPTION":
      order_img = MEMBERSHIP;
      break;
    case "AD CREDIT":
      order_img = ADS_CREDIT;
      break;
  }
  const isCustomPlan = plan === "Custom";
  return (
    <div key={order_id} className="order-card-outer-container">
      <div className="order-card-container">
        <div>
          <div className="order-history-icon"><Icon src={order_img} alt={type} size="3rem" /></div>
        </div>
        <div>
          <h2>
            {type} | {isCustomPlan ? (
              <>
                {plan} : {Ads} Ads Credit - {tenure} day validity
              </>
            ) : (
              plan
            )}
          </h2>
          <p className="order_id">ODI : {order_id}</p>
          <p className="order_id">
            Amount : {currency} {amount}
          </p>
          <p className="order_id">Expires On : {timeStamp}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCards;
