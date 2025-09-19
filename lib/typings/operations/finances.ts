import type {BaseResponse} from '../baseTypes';

export interface ListFinancialEventGroupsQuery {
  MaxResultsPerPage?: number;
  FinancialEventGroupStartedBefore?: string;
  FinancialEventGroupStartedAfter?: string;
  NextToken?: string;
}

export interface ListFinancialEventGroupsResponse extends BaseResponse {
  payload?: ListFinancialEventGroupsPayload;
}

export interface ListFinancialEventGroupsByGroupIdQuery {
  MaxResultsPerPage?: number;
  NextToken?: string;
}

export interface ListFinancialEventGroupsByGroupIdPath {
  eventGroupId: string;
}

export interface ListFinancialEventGroupsByGroupIdResponse extends BaseResponse {
  payload?: ListFinancialEventsPayload;
}

export interface ListFinancialEventsByOrderIdPath {
  orderId: string;
}

export interface ListFinancialEventsByOrderIdQuery {
  MaxResultsPerPage?: number;
  NextToken?: string;
}

export interface ListFinancialEventsByOrderIdResponse extends ListFinancialEventGroupsByGroupIdResponse {}

export interface ListFinancialEventsQuery {
  MaxResultsPerPage?: number;
  PostedAfter?: string;
  PostedBefore?: string;
  NextToken?: string;
}

export interface ListFinancialEventsResponse extends ListFinancialEventGroupsByGroupIdResponse {}

export interface ListFinancialEventGroupsPayload {
  NextToken?: string;
  FinancialEventGroupList?: FinancialEventGroup[];
}

export interface FinancialEventGroup {
  FinancialEventGroupId?: string;
  ProcessingStatus?: string;
  FundTransferStatus?: string;
  OriginalTotal?: Currency;
  ConvertedTotal?: Currency;
  FundTransferDate?: string;
  TraceId?: string;
  AccountTail?: string;
  BeginningBalance?: Currency;
  FinancialEventGroupStart?: string;
  FinancialEventGroupEnd?: string;
}

export interface Currency {
  CurrencyCode?: string;
  CurrencyAmount?: number;
}

export interface ListFinancialEventsPayload {
  FinancialEvents?: FinancialEvents;
  NextToken?: string;
}

export interface FinancialEvents {
  ShipmentEventList?: ShipmentEvent[];
  RefundEventList?: ShipmentEvent[];
  GuaranteeClaimEventList?: ShipmentEvent[];
  ChargebackEventList?: ShipmentEvent[];
  PayWithAmazonEventList?: PayWithAmazonEvent[];
  ServiceProviderCreditEventList?: SolutionProviderCreditEvent[];
  RetrochargeEventList?: RetrochargeEvent[];
  RentalTransactionEventList?: RentalTransactionEvent[];
  ProductAdsPaymentEventList?: ProductAdsPaymentEvent[];
  ServiceFeeEventList?: ServiceFeeEvent[];
  SellerDealPaymentEventList?: SellerDealPaymentEvent[];
  DebtRecoveryEventList?: DebtRecoveryEvent[];
  LoanServicingEventList?: LoanServicingEvent[];
  AdjustmentEventList?: AdjustmentEvent[];
  SAFETReimbursementEventList?: SAFETReimbursementEvent[];
  SellerReviewEnrollmentPaymentEventList?: SellerReviewEnrollmentPaymentEvent[];
  FBALiquidationEventList?: FBALiquidationEvent[];
  CouponPaymentEventList?: CouponPaymentEvent[];
  ImagingServicesFeeEventList?: ImagingServicesFeeEvent[];
  NetworkComminglingTransactionEventList?: NetworkComminglingTransactionEvent[];
  AffordabilityExpenseEventList?: AffordabilityExpenseEvent[];
  AffordabilityExpenseReversalEventList?: AffordabilityExpenseEvent[];
}

export interface ShipmentEvent {
  AmazonOrderId?: string;
  SellerOrderId?: string;
  MarketplaceName?: string;
  OrderChargeList?: ChargeComponent[];
  OrderChargeAdjustmentList?: ChargeComponent[];
  ShipmentFeeList?: FeeComponent[];
  ShipmentFeeAdjustmentList?: FeeComponent[];
  OrderFeeList?: FeeComponent[];
  OrderFeeAdjustmentList?: FeeComponent[];
  DirectPaymentList?: DirectPayment[];
  PostedDate?: string;
  ShipmentItemList?: ShipmentItem[];
  ShipmentItemAdjustmentList?: ShipmentItem[];
}

export interface ChargeComponent {
  ChargeType?: string;
  ChargeAmount?: Currency;
}

export interface FeeComponent {
  FeeType?: string;
  FeeAmount?: Currency;
}

export interface DirectPayment {
  DirectPaymentType?: string;
  DirectPaymentAmount?: Currency;
}

export interface ShipmentItem {
  SellerSKU?: string;
  OrderItemId?: string;
  OrderAdjustmentItemId?: string;
  QuantityShipped?: number;
  ItemChargeList?: ChargeComponent[];
  ItemChargeAdjustmentList?: ChargeComponent[];
  ItemFeeList?: FeeComponent[];
  ItemFeeAdjustmentList?: FeeComponent[];
  ItemTaxWithheldList?: TaxWithheldComponent[];
  PromotionList?: Promotion[];
  PromotionAdjustmentList?: Promotion[];
  CostOfPointsGranted?: Currency;
  CostOfPointsReturned?: Currency;
}

export interface TaxWithheldComponent {
  TaxCollectionModel?: string;
  TaxesWithheld?: ChargeComponent[];
}

export interface Promotion {
  PromotionType?: string;
  PromotionId?: string;
  PromotionAmount?: Currency;
}

export interface PayWithAmazonEvent {
  SellerOrderId?: string;
  TransactionPostedDate?: string;
  BusinessObjectType?: string;
  SalesChannel?: string;
  Charge?: ChargeComponent;
  FeeList?: FeeComponent[];
  PaymentAmountType?: string;
  AmountDescription?: string;
  FulfillmentChannel?: string;
  StoreName?: string;
}

export interface SolutionProviderCreditEvent {
  ProviderTransactionType?: string;
  SellerOrderId?: string;
  MarketplaceId?: string;
  MarketplaceCountryCode?: string;
  SellerId?: string;
  SellerStoreName?: string;
  ProviderId?: string;
  ProviderStoreName?: string;
  TransactionAmount?: Currency;
  TransactionCreationDate?: string;
}

export interface RetrochargeEvent {
  RetrochargeEventType?: string;
  AmazonOrderId?: string;
  PostedDate?: string;
  BaseTax?: Currency;
  ShippingTax?: Currency;
  MarketplaceName?: string;
  RetrochargeTaxWithheldList?: TaxWithheldComponent[];
}

export interface RentalTransactionEvent {
  AmazonOrderId?: string;
  RentalEventType?: string;
  ExtensionLength?: number;
  PostedDate?: string;
  RentalChargeList?: ChargeComponent[];
  RentalFeeList?: FeeComponent[];
  MarketplaceName?: string;
  RentalInitialValue?: Currency;
  RentalReimbursement?: Currency;
  RentalTaxWithheldList?: TaxWithheldComponent[];
}

export interface ProductAdsPaymentEvent {
  postedDate?: string;
  transactionType?: string;
  invoiceId?: string;
  baseValue?: Currency;
  taxValue?: Currency;
  transactionValue?: Currency;
}

export interface ServiceFeeEvent {
  AmazonOrderId?: string;
  FeeReason?: string;
  FeeList?: FeeComponent[];
  SellerSKU?: string;
  FnSKU?: string;
  FeeDescription?: string;
  ASIN?: string;
}

export interface SellerDealPaymentEvent {
  postedDate?: string;
  dealId?: string;
  dealDescription?: string;
  eventType?: string;
  feeType?: string;
  feeAmount?: Currency;
  taxAmount?: Currency;
  totalAmount?: Currency;
}

export interface DebtRecoveryEvent {
  DebtRecoveryType?: string;
  RecoveryAmount?: Currency;
  OverPaymentCredit?: Currency;
  DebtRecoveryItemList?: DebtRecoveryItem[];
  ChargeInstrumentList?: ChargeInstrument[];
}

export interface DebtRecoveryItem {
  RecoveryAmount?: Currency;
  OriginalAmount?: Currency;
  GroupBeginDate?: string;
  GroupEndDate?: string;
}

export interface ChargeInstrument {
  Description?: string;
  Tail?: string;
  Amount?: Currency;
}

export interface LoanServicingEvent {
  LoanAmount?: Currency;
  LoanServicingEvent?: string;
}

export interface AdjustmentEvent {
  AdjustmentType?: string;
  PostedDate?: string;
  AdjustmentAmount?: Currency;
  AdjustmentItemList?: AdjustmentItem[];
}

export interface AdjustmentItem {
  Quantity?: string;
  PerUnitAmount?: Currency;
  TotalAmount?: Currency;
  SellerSKU?: string;
  FnSKU?: string;
  ProductDescription?: string;
  ASIN?: string;
}

export interface SAFETReimbursementEvent {
  PostedDate?: string;
  SAFETClaimId: string;
  ReimbursedAmount?: Currency;
  ReasonCode?: string;
  SAFETReimbursementItemList?: SAFETReimbursementItem[];
}

export interface SAFETReimbursementItem {
  itemChargeList?: ChargeComponent[];
  productDescription?: string;
  quantity?: string;
}

export interface SellerReviewEnrollmentPaymentEvent {
  PostedDate?: string;
  EnrollmentId?: string;
  ParentASIN?: string;
  FeeComponent?: FeeComponent;
  ChargeComponent?: ChargeComponent;
  TotalAmount?: Currency;
}

export interface FBALiquidationEvent {
  PostedDate?: string;
  OriginalRemovalOrderId?: string;
  LiquidationProceedsAmount?: Currency;
  LiquidationFeeAmount?: Currency;
}

export interface CouponPaymentEvent {
  PostedDate?: string;
  CouponId?: string;
  SellerCouponDescription?: string;
  ClipOrRedemptionCount?: number;
  PaymentEventId?: string;
  FeeComponent?: FeeComponent;
  ChargeComponent?: ChargeComponent;
  TotalAmount?: Currency;
}

export interface ImagingServicesFeeEvent {
  ImagingRequestBillingItemID?: string;
  ASIN?: string;
  PostedDate?: string;
  FeeList?: FeeComponent[];
}

export interface NetworkComminglingTransactionEvent {
  TransactionType?: string;
  PostedDate?: string;
  NetCoTransactionID?: string;
  SwapReason?: string;
  ASIN?: string;
  MarketplaceId?: string;
  TaxExclusiveAmount?: Currency;
  TaxAmount?: Currency;
}

export interface AffordabilityExpenseEvent {
  AmazonOrderId?: string;
  PostedDate?: string;
  MarketplaceId?: string;
  TransactionType?: string;
  BaseExpense?: Currency;
  TaxTypeCGST: Currency;
  TaxTypeSGST: Currency;
  TaxTypeIGST: Currency;
  TotalExpense?: Currency;
}

export interface ListTransactionsQuery {
  postedAfter?: string,
  postedBefore?: string,
  marketplaceId?: string,
  nextToken?: string,
}

export interface ListTransactionsResponse {
  nextToken?: string;
  transactions?: Transaction[];
}

interface Transaction {
  sellingPartnerMetadata?: SellingPartnerMetadata;
  relatedIdentifiers?: RelatedIdentifier[];
  transactionType?: string; // e.g., 'Shipment'
  transactionId?: string;
  transactionStatus?: 'Deferred' | 'Released';
  description?: string; // e.g., 'Order Payment', 'Refund Order'
  postedDate?: string; // ISO 8601 date-time format
  totalAmount?: Currency;
  marketplaceDetails?: MarketplaceDetails;
  items?: Item[];
  contexts?: Context[];
  breakdowns?: Breakdown[];
}

interface SellingPartnerMetadata {
  sellingPartnerId?: string;
  accountType?: string;
  marketplaceId?: string;
}

interface RelatedIdentifier {
  relatedIdentifierName?: RelatedIdentifierName;
  relatedIdentifierValue?: string;
}

type RelatedIdentifierName = 'ORDER_ID' | 'SHIPMENT_ID' | 'EVENT_GROUP_ID' | 'REFUND_ID' | 'INVOICE_ID' | 'DISBURSEMENT_ID' | 'TRANSFER_ID' | 'DEFERRED_TRANSACTION_ID';

interface MarketplaceDetails {
  marketplaceId?: string;
  marketplaceName?: string;
}

interface Item {
  description?: string;
  relatedIdentifiers?: ItemRelatedIdentifier[];
  totalAmount?: Currency;
  breakdowns?: Breakdown[];
  contexts?: Context[];
}

interface ItemRelatedIdentifier {
  itemRelatedIdentifierName?: ItemRelatedIdentifierName;
  itemRelatedIdentifierValue?: string;
}

type ItemRelatedIdentifierName = 'ORDER_ADJUSTMENT_ITEM_ID' | 'COUPON_ID' | 'REMOVAL_SHIPMENT_ITEM_ID' | 'TRANSACTION_ID';

interface Breakdown {
  breakdownType?: string;
  breakdownAmount?: Currency;
  breakdowns?: Breakdown[];
}

interface Context {
  contextType: string;
  storeName?: string;
  orderType?: string;
  channel?: string;
  asin?: string;
  sku?: string;
  quantityShipped?: number;
  fulfillmentNetwork?: string;
  paymentType?: string;
  paymentMethod?: string;
  paymentReference?: string;
  paymentDate?: string; // ISO 8601 date-time format
  deferralReason?: string;
  maturityDate?: string; // ISO 8601 date-time format
  deferralStatus?: string; // e.g., 'HOLD', 'RELEASE'
  startTime?: string; // ISO 8601 date-time format
  endTime?: string; // ISO 8601 date-time format
}