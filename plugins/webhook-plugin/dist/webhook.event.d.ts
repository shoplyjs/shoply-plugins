import { RequestContext, VendureEvent } from '@shoplyjs/core';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { CreateWebhookDto } from './dto/create-webhook.dto';
type WebhookEventType = 'created' | 'deleted';
/**
 * @description
 * This event is fired whenever a {@link Webhook} is created, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 * @since 2.3.0
 */
export declare class WebhookEvent extends VendureEvent {
    ctx: RequestContext;
    webhook: CreateWebhookDto | UpdateWebhookDto;
    type: WebhookEventType;
    constructor(ctx: RequestContext, webhook: CreateWebhookDto | UpdateWebhookDto, type: WebhookEventType);
}
export {};
//# sourceMappingURL=webhook.event.d.ts.map