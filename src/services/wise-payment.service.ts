import {
  AbstractPaymentService,
  PaymentContext,
  Data,
  Payment,
  PaymentSession,
  PaymentSessionStatus,
  PaymentSessionData,
  Cart,
  PaymentData,
  PaymentSessionResponse,
} from "@medusajs/medusa";

import { EntityManager } from "typeorm";

class WisePaymentService extends AbstractPaymentService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager | undefined;

  constructor(container, options) {
    super(container);
  }

  public async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  public async updatePaymentData(
    paymentSessionData: PaymentSessionData,
    data: Data
  ): Promise<PaymentSessionData> {
    throw new Error("Method not implemented.");
  }
  public async createPayment(
    context: Cart & PaymentContext
  ): Promise<PaymentSessionResponse> {
    throw new Error("Method not implemented.");
  }
  public async retrievePayment(paymentData: Data): Promise<Data> {
    throw new Error("Method not implemented.");
  }
  public async updatePayment(
    paymentSessionData: PaymentSessionData,
    cart: Cart
  ): Promise<PaymentSessionData> {
    throw new Error("Method not implemented.");
  }
  public async authorizePayment(
    paymentSession: PaymentSession,
    context: Data
  ): Promise<{ data: PaymentSessionData; status: PaymentSessionStatus }> {
    throw new Error("Method not implemented.");
  }
  public async capturePayment(payment: Payment): Promise<PaymentData> {
    throw new Error("Method not implemented.");
  }
  public async refundPayment(
    payment: Payment,
    refundAmount: number
  ): Promise<PaymentData> {
    throw new Error("Method not implemented.");
  }
  public async cancelPayment(payment: Payment): Promise<PaymentData> {
    throw new Error("Method not implemented.");
  }
  public async deletePayment(paymentSession: PaymentSession): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async getStatus(data: Data): Promise<PaymentSessionStatus> {
    throw new Error("Method not implemented.");
  }
}

export default WisePaymentService;
