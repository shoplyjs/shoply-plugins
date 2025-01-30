import { RequestContext } from '@shoplyjs/core';
import { Webhook } from '../entities/webhook.entity';
import { WebhookService } from '../services/webhook.service';
export declare class WebhookResolver {
    private webhookService;
    constructor(webhookService: WebhookService);
    webhooks(ctx: RequestContext): Promise<Webhook[]>;
    webhook(ctx: RequestContext, args: any): Promise<Webhook | null>;
    createWebhook(ctx: RequestContext, args: any): Promise<Webhook>;
    updateWebhook(ctx: RequestContext, args: any): Promise<Webhook>;
    deleteWebhook(ctx: RequestContext, args: any): Promise<void>;
}
//# sourceMappingURL=webhook.resolver.d.ts.map