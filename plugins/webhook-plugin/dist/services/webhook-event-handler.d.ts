import { EventEmitter2 } from '@nestjs/event-emitter';
import { Webhook } from '../entities/webhook.entity';
export declare class WebhookEventHandler {
    private eventEmitter;
    private eventHandlers;
    constructor(eventEmitter: EventEmitter2);
    subscribeWebhookEvent(webhook: Webhook): void;
    unsubscribeWebhookEvent(eventType: string, webhookId: string): void;
    private proceedWebhook;
    private callRestWebhook;
}
//# sourceMappingURL=webhook-event-handler.d.ts.map