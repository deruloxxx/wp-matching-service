import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface Notifier {
  notifySuccess(msg: string): void;

  notifyFailed(msg: string): void;
}

class OrderApplication {
  constructor(private readonly notifier: Notifier) {}

  requestOrder(cmd: RequestOrderCommand) {
    // ...

    if (order.success) {
      this.notifier.notifySuccess('あなたのオーダーは受注されました');
    } else {
      this.notifier.notifyFailed(
        `あなたのオーダーは ${order.reason} によってリジェクトされました`,
      );
    }
  }
}

function test () {
  class StubNotifier implements Notifier {
    notifyFailed(msg: string): void {}

    notifySuccess(msg: string): void {}
  }

  function test_order_without_error() {
    const orderApp = new OrderApplication(new StubNotifier());

    orderApp.requestOrder(new RequestOrderCommand());
  }
}

class EngineerId {
  constructor(readonly engineerId: string) {}
}

class ClientId {
  constructor(readonly publisher: string) {}
}

class RequestOrderCommand {
  private engineerId: EngineerId;
  private publisher: ClientId;
  private startDate: Date;
  private endDate: Date;

  constructor(
    engineerId: string,
    publisher: string,
    startDate: string,
    endDate: string,
  ) {
    this.engineerId = new EngineerId(engineerId);
    this.publisher = new ClientId(publisher);
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly orderApplication: OrderApplication,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  publishOrder(req: {
    engineerId: string; // => EngineerId
    publisher: string; // => ClientId
    startDate: string; // => Date
    endDate: string; // => Date
  }): void {
    this.orderApplication.requestOrder(
      new RequestOrderCommand(
        req.engineerId,
        req.publisher,
        req.startDate,
        req.endDate,
      ),
    );
  }
}
